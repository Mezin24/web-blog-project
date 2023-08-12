export type BuildMode = 'production' | 'development'

export interface BuildPaths {
  build: string,
  entry: string,
  html: string,
  src: string,
}

export interface BuildOptions {
  mode: BuildMode,
  paths: BuildPaths,
  isDev: boolean,
  port: number,
  apiUrl: string,
  project: 'frontend' | 'storybook' | 'jest'
}

export interface EnvOptions {
  port: number,
  mode: BuildMode
  apiUrl: string
}
