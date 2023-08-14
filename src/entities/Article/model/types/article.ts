export enum ArticleBlockTypes {
  CODE = 'CODE',
  IMAGE = 'IMAGE',
  TEXT = 'TEXT'
}

interface ArticleBlockBase {
  id: string;
  type: ArticleBlockTypes
}

export interface ArticleCodeBlock extends ArticleBlockBase {
  type: ArticleBlockTypes.CODE,
  code: string
}

export interface ArticleImageBlock extends ArticleBlockBase {
  type: ArticleBlockTypes.IMAGE,
  src: string,
  title: string
}

export interface ArticleTextBlock extends ArticleBlockBase {
  type: ArticleBlockTypes.TEXT,
  title: string,
  paragraphs: string[]
}

export type ArticleBlock = ArticleCodeBlock | ArticleImageBlock |ArticleTextBlock

export enum ArticleType {
  IT = 'it',
  SCIENCE = 'science'
}

export interface Article {
  id: string,
  title: string,
  subtitle: string,
  img: string,
  views: number,
  createdAt: string,
  type: ArticleType[],
  blocks: ArticleBlock[]
}
