type ArticleBlockTypes = 'CODE' | 'TEXT' | 'IMAGE';

interface ArticleBlockBase {
  id: string;
  type: ArticleBlockTypes
}

interface ArticleCodeBlock extends ArticleBlockBase {
  type: 'CODE',
  code: string
}

interface ArticleImageBlock extends ArticleBlockBase {
  type: 'IMAGE',
  src: string,
  title: string
}

interface ArticleTextBlock extends ArticleBlockBase {
  type: 'TEXT',
  title: string,
  paragraphs: string[]
}

type ArticleBlock = ArticleCodeBlock | ArticleImageBlock |ArticleTextBlock

enum ArticleType {
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
