import React from 'react';
import { ImageRequireSource } from 'react-native';
import {
  AppLoading,
  SplashScreen,
} from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import { LoadingAnimationComponent } from './loadingAnimation.component';

export interface Assets {
  images: ImageRequireSource[];
  fonts: { [key: string]: number };
}

interface Props {
  assets: Assets;
}

interface State {
  loaded: boolean;
}

type LoadingElement = React.ReactElement<{}>;

/**
 * Loads child component after asynchronous tasks are done
 */
export class ApplicationLoader extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    SplashScreen.preventAutoHide();
  }

  public state: State = {
    loaded: false,
  };

  private onLoadSuccess = () => {
    // @ts-ignore (expo type error)
    this.setState({ loaded: true });
    SplashScreen.hide();
  };

  private onLoadError = (error: Error) => {
    console.warn(error);
  };

  private loadResources = (): Promise<void> => {
    // @ts-ignore (expo type error)
    return this.loadResourcesAsync(this.props.assets);
  };

  private loadFonts = (fonts: {[key: string]: number}): Promise<void> => {
    return Font.loadAsync(fonts);
  };

  private loadImages = (images: ImageRequireSource[]): Promise<void[]> => {
    const tasks: Promise<void>[] = images.map((image: ImageRequireSource): Promise<void> => {
      return Asset.fromModule(image).downloadAsync();
    });

    // @ts-ignore (expo type error)
    return Promise.all(tasks);
  };

  // @ts-ignore (expo type error)
  private async loadResourcesAsync(assets: Assets): Promise<void> {
    const { fonts, images } = assets;

    // @ts-ignore (expo type error)
    return Promise.all([
      this.loadFonts(fonts),
      this.loadImages(images),
    ]);
  }

  private renderLoading = (): LoadingElement => {
    return (
      <AppLoading
        startAsync={this.loadResources}
        onFinish={this.onLoadSuccess}
        onError={this.onLoadError}
        autoHideSplash={false}
      />
    );
  };

  public render(): React.ReactNode {
    return (
      <React.Fragment>
        {this.state.loaded ? this.props.children : this.renderLoading()}
        <LoadingAnimationComponent isLoaded={this.state.loaded}/>
      </React.Fragment>
    );
  }
}
