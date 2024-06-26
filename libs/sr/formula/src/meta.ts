type Tag = Record<string, string>

export type IConditionalData =
  | IBoolConditionalData
  | IListConditionalData
  | INumConditionalData
export type IFormulaData = {
  sheet: string // entity
  name: string // formula name
  tag: Tag // tag used to access value
}

/// Conditional whose values are True (1.0) and False (0.0)
export type IBoolConditionalData = {
  type: 'bool' // type discriminator
  sheet: string // entity
  name: string // conditional name
}
/// Conditional whose values are those in the list. When inputting the
/// entry, use the (0-based) position in the list
export type IListConditionalData = {
  type: 'list' // type discriminator
  sheet: string // entity
  name: string // conditional name

  list: [string] // feasible values
}
/// Conditional whose values are regular numbers
export type INumConditionalData = {
  type: 'num' // type discriminator
  sheet: string // entity
  name: string // conditional name

  int_only: boolean // whether the value must be an integer
  min?: number // smallest feasible value, if applicable
  max?: number // largest feasible value, if applicable
}

export const conditionals = {
  Acheron: {
    boolConditional: {
      sheet: 'Acheron',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'Acheron',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'Acheron',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  Argenti: {
    boolConditional: {
      sheet: 'Argenti',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'Argenti',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'Argenti',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  Arlan: {
    boolConditional: { sheet: 'Arlan', name: 'boolConditional', type: 'bool' },
    listConditional: {
      sheet: 'Arlan',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'Arlan',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  Asta: {
    boolConditional: { sheet: 'Asta', name: 'boolConditional', type: 'bool' },
    listConditional: {
      sheet: 'Asta',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'Asta',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  Aventurine: {
    boolConditional: {
      sheet: 'Aventurine',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'Aventurine',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'Aventurine',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  Bailu: {
    boolConditional: { sheet: 'Bailu', name: 'boolConditional', type: 'bool' },
    listConditional: {
      sheet: 'Bailu',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'Bailu',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  BlackSwan: {
    boolConditional: {
      sheet: 'BlackSwan',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'BlackSwan',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'BlackSwan',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  Blade: {
    boolConditional: { sheet: 'Blade', name: 'boolConditional', type: 'bool' },
    listConditional: {
      sheet: 'Blade',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'Blade',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  Bronya: {
    boolConditional: { sheet: 'Bronya', name: 'boolConditional', type: 'bool' },
    listConditional: {
      sheet: 'Bronya',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'Bronya',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  Clara: {
    boolConditional: { sheet: 'Clara', name: 'boolConditional', type: 'bool' },
    listConditional: {
      sheet: 'Clara',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'Clara',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  DanHeng: {
    boolConditional: {
      sheet: 'DanHeng',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'DanHeng',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'DanHeng',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  DanHengImbibitorLunae: {
    boolConditional: {
      sheet: 'DanHengImbibitorLunae',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'DanHengImbibitorLunae',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'DanHengImbibitorLunae',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  DrRatio: {
    boolConditional: {
      sheet: 'DrRatio',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'DrRatio',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'DrRatio',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  FuXuan: {
    boolConditional: { sheet: 'FuXuan', name: 'boolConditional', type: 'bool' },
    listConditional: {
      sheet: 'FuXuan',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'FuXuan',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  Gallagher: {
    boolConditional: {
      sheet: 'Gallagher',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'Gallagher',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'Gallagher',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  Gepard: {
    boolConditional: { sheet: 'Gepard', name: 'boolConditional', type: 'bool' },
    listConditional: {
      sheet: 'Gepard',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'Gepard',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  Guinaifen: {
    boolConditional: {
      sheet: 'Guinaifen',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'Guinaifen',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'Guinaifen',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  Hanya: {
    boolConditional: { sheet: 'Hanya', name: 'boolConditional', type: 'bool' },
    listConditional: {
      sheet: 'Hanya',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'Hanya',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  Herta: {
    boolConditional: { sheet: 'Herta', name: 'boolConditional', type: 'bool' },
    listConditional: {
      sheet: 'Herta',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'Herta',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  Himeko: {
    boolConditional: { sheet: 'Himeko', name: 'boolConditional', type: 'bool' },
    listConditional: {
      sheet: 'Himeko',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'Himeko',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  Hook: {
    boolConditional: { sheet: 'Hook', name: 'boolConditional', type: 'bool' },
    listConditional: {
      sheet: 'Hook',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'Hook',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  Huohuo: {
    boolConditional: { sheet: 'Huohuo', name: 'boolConditional', type: 'bool' },
    listConditional: {
      sheet: 'Huohuo',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'Huohuo',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  JingYuan: {
    boolConditional: {
      sheet: 'JingYuan',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'JingYuan',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'JingYuan',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  Jingliu: {
    boolConditional: {
      sheet: 'Jingliu',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'Jingliu',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'Jingliu',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  Kafka: {
    boolConditional: { sheet: 'Kafka', name: 'boolConditional', type: 'bool' },
    listConditional: {
      sheet: 'Kafka',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'Kafka',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  Luka: {
    boolConditional: { sheet: 'Luka', name: 'boolConditional', type: 'bool' },
    listConditional: {
      sheet: 'Luka',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'Luka',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  Luocha: {
    boolConditional: { sheet: 'Luocha', name: 'boolConditional', type: 'bool' },
    listConditional: {
      sheet: 'Luocha',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'Luocha',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  Lynx: {
    boolConditional: { sheet: 'Lynx', name: 'boolConditional', type: 'bool' },
    listConditional: {
      sheet: 'Lynx',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'Lynx',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  Misha: {
    boolConditional: { sheet: 'Misha', name: 'boolConditional', type: 'bool' },
    listConditional: {
      sheet: 'Misha',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'Misha',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  Natasha: {
    boolConditional: {
      sheet: 'Natasha',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'Natasha',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'Natasha',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  Pela: {
    boolConditional: { sheet: 'Pela', name: 'boolConditional', type: 'bool' },
    listConditional: {
      sheet: 'Pela',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'Pela',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  Qingque: {
    boolConditional: {
      sheet: 'Qingque',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'Qingque',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'Qingque',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  RuanMei: {
    boolConditional: {
      sheet: 'RuanMei',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'RuanMei',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'RuanMei',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  Sampo: {
    boolConditional: { sheet: 'Sampo', name: 'boolConditional', type: 'bool' },
    listConditional: {
      sheet: 'Sampo',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'Sampo',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  Seele: {
    boolConditional: { sheet: 'Seele', name: 'boolConditional', type: 'bool' },
    listConditional: {
      sheet: 'Seele',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'Seele',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  Serval: {
    boolConditional: { sheet: 'Serval', name: 'boolConditional', type: 'bool' },
    listConditional: {
      sheet: 'Serval',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'Serval',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  SilverWolf: {
    boolConditional: {
      sheet: 'SilverWolf',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'SilverWolf',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'SilverWolf',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  Sparkle: {
    boolConditional: {
      sheet: 'Sparkle',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'Sparkle',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'Sparkle',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  Sushang: {
    boolConditional: {
      sheet: 'Sushang',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'Sushang',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'Sushang',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  Tingyun: {
    boolConditional: {
      sheet: 'Tingyun',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'Tingyun',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'Tingyun',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  TopazAndNumby: {
    boolConditional: {
      sheet: 'TopazAndNumby',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'TopazAndNumby',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'TopazAndNumby',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  Welt: {
    boolConditional: { sheet: 'Welt', name: 'boolConditional', type: 'bool' },
    listConditional: {
      sheet: 'Welt',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'Welt',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  Xueyi: {
    boolConditional: { sheet: 'Xueyi', name: 'boolConditional', type: 'bool' },
    listConditional: {
      sheet: 'Xueyi',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'Xueyi',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  Yanqing: {
    boolConditional: {
      sheet: 'Yanqing',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'Yanqing',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'Yanqing',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  Yukong: {
    boolConditional: { sheet: 'Yukong', name: 'boolConditional', type: 'bool' },
    listConditional: {
      sheet: 'Yukong',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'Yukong',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  ASecretVow: {
    boolConditional: {
      sheet: 'ASecretVow',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'ASecretVow',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'ASecretVow',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  Adversarial: {
    boolConditional: {
      sheet: 'Adversarial',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'Adversarial',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'Adversarial',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  AlongThePassingShore: {
    boolConditional: {
      sheet: 'AlongThePassingShore',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'AlongThePassingShore',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'AlongThePassingShore',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  Amber: {
    boolConditional: { sheet: 'Amber', name: 'boolConditional', type: 'bool' },
    listConditional: {
      sheet: 'Amber',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'Amber',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  AnInstantBeforeAGaze: {
    boolConditional: {
      sheet: 'AnInstantBeforeAGaze',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'AnInstantBeforeAGaze',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'AnInstantBeforeAGaze',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  Arrows: {
    boolConditional: { sheet: 'Arrows', name: 'boolConditional', type: 'bool' },
    listConditional: {
      sheet: 'Arrows',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'Arrows',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  BaptismOfPureThought: {
    boolConditional: {
      sheet: 'BaptismOfPureThought',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'BaptismOfPureThought',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'BaptismOfPureThought',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  BeforeDawn: {
    boolConditional: {
      sheet: 'BeforeDawn',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'BeforeDawn',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'BeforeDawn',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  BeforeTheTutorialMissionStarts: {
    boolConditional: {
      sheet: 'BeforeTheTutorialMissionStarts',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'BeforeTheTutorialMissionStarts',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'BeforeTheTutorialMissionStarts',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  BrighterThanTheSun: {
    boolConditional: {
      sheet: 'BrighterThanTheSun',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'BrighterThanTheSun',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'BrighterThanTheSun',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  ButTheBattleIsntOver: {
    boolConditional: {
      sheet: 'ButTheBattleIsntOver',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'ButTheBattleIsntOver',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'ButTheBattleIsntOver',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  CarveTheMoonWeaveTheClouds: {
    boolConditional: {
      sheet: 'CarveTheMoonWeaveTheClouds',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'CarveTheMoonWeaveTheClouds',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'CarveTheMoonWeaveTheClouds',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  Chorus: {
    boolConditional: { sheet: 'Chorus', name: 'boolConditional', type: 'bool' },
    listConditional: {
      sheet: 'Chorus',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'Chorus',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  CollapsingSky: {
    boolConditional: {
      sheet: 'CollapsingSky',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'CollapsingSky',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'CollapsingSky',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  ConcertForTwo: {
    boolConditional: {
      sheet: 'ConcertForTwo',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'ConcertForTwo',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'ConcertForTwo',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  Cornucopia: {
    boolConditional: {
      sheet: 'Cornucopia',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'Cornucopia',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'Cornucopia',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  CruisingInTheStellarSea: {
    boolConditional: {
      sheet: 'CruisingInTheStellarSea',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'CruisingInTheStellarSea',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'CruisingInTheStellarSea',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  DanceDanceDance: {
    boolConditional: {
      sheet: 'DanceDanceDance',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'DanceDanceDance',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'DanceDanceDance',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  DartingArrow: {
    boolConditional: {
      sheet: 'DartingArrow',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'DartingArrow',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'DartingArrow',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  DataBank: {
    boolConditional: {
      sheet: 'DataBank',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'DataBank',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'DataBank',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  DayOneOfMyNewLife: {
    boolConditional: {
      sheet: 'DayOneOfMyNewLife',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'DayOneOfMyNewLife',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'DayOneOfMyNewLife',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  Defense: {
    boolConditional: {
      sheet: 'Defense',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'Defense',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'Defense',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  DestinysThreadsForewoven: {
    boolConditional: {
      sheet: 'DestinysThreadsForewoven',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'DestinysThreadsForewoven',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'DestinysThreadsForewoven',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  DreamvilleAdventure: {
    boolConditional: {
      sheet: 'DreamvilleAdventure',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'DreamvilleAdventure',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'DreamvilleAdventure',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  EarthlyEscapade: {
    boolConditional: {
      sheet: 'EarthlyEscapade',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'EarthlyEscapade',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'EarthlyEscapade',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  EchoesOfTheCoffin: {
    boolConditional: {
      sheet: 'EchoesOfTheCoffin',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'EchoesOfTheCoffin',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'EchoesOfTheCoffin',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  EyesOfThePrey: {
    boolConditional: {
      sheet: 'EyesOfThePrey',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'EyesOfThePrey',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'EyesOfThePrey',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  Fermata: {
    boolConditional: {
      sheet: 'Fermata',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'Fermata',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'Fermata',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  FinalVictor: {
    boolConditional: {
      sheet: 'FinalVictor',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'FinalVictor',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'FinalVictor',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  FineFruit: {
    boolConditional: {
      sheet: 'FineFruit',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'FineFruit',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'FineFruit',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  FlamesAfar: {
    boolConditional: {
      sheet: 'FlamesAfar',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'FlamesAfar',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'FlamesAfar',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  GeniusesRepose: {
    boolConditional: {
      sheet: 'GeniusesRepose',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'GeniusesRepose',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'GeniusesRepose',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  GoodNightAndSleepWell: {
    boolConditional: {
      sheet: 'GoodNightAndSleepWell',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'GoodNightAndSleepWell',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'GoodNightAndSleepWell',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  HeyOverHere: {
    boolConditional: {
      sheet: 'HeyOverHere',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'HeyOverHere',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'HeyOverHere',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  HiddenShadow: {
    boolConditional: {
      sheet: 'HiddenShadow',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'HiddenShadow',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'HiddenShadow',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  IShallBeMyOwnSword: {
    boolConditional: {
      sheet: 'IShallBeMyOwnSword',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'IShallBeMyOwnSword',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'IShallBeMyOwnSword',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  InTheNameOfTheWorld: {
    boolConditional: {
      sheet: 'InTheNameOfTheWorld',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'InTheNameOfTheWorld',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'InTheNameOfTheWorld',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  InTheNight: {
    boolConditional: {
      sheet: 'InTheNight',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'InTheNight',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'InTheNight',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  IncessantRain: {
    boolConditional: {
      sheet: 'IncessantRain',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'IncessantRain',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'IncessantRain',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  IndeliblePromise: {
    boolConditional: {
      sheet: 'IndeliblePromise',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'IndeliblePromise',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'IndeliblePromise',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  InherentlyUnjustDestiny: {
    boolConditional: {
      sheet: 'InherentlyUnjustDestiny',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'InherentlyUnjustDestiny',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'InherentlyUnjustDestiny',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  ItsShowtime: {
    boolConditional: {
      sheet: 'ItsShowtime',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'ItsShowtime',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'ItsShowtime',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  LandausChoice: {
    boolConditional: {
      sheet: 'LandausChoice',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'LandausChoice',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'LandausChoice',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  Loop: {
    boolConditional: { sheet: 'Loop', name: 'boolConditional', type: 'bool' },
    listConditional: {
      sheet: 'Loop',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'Loop',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  MakeTheWorldClamor: {
    boolConditional: {
      sheet: 'MakeTheWorldClamor',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'MakeTheWorldClamor',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'MakeTheWorldClamor',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  Mediation: {
    boolConditional: {
      sheet: 'Mediation',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'Mediation',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'Mediation',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  MemoriesOfThePast: {
    boolConditional: {
      sheet: 'MemoriesOfThePast',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'MemoriesOfThePast',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'MemoriesOfThePast',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  MeshingCogs: {
    boolConditional: {
      sheet: 'MeshingCogs',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'MeshingCogs',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'MeshingCogs',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  MomentOfVictory: {
    boolConditional: {
      sheet: 'MomentOfVictory',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'MomentOfVictory',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'MomentOfVictory',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  Multiplication: {
    boolConditional: {
      sheet: 'Multiplication',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'Multiplication',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'Multiplication',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  MutualDemise: {
    boolConditional: {
      sheet: 'MutualDemise',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'MutualDemise',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'MutualDemise',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  NightOfFright: {
    boolConditional: {
      sheet: 'NightOfFright',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'NightOfFright',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'NightOfFright',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  NightOnTheMilkyWay: {
    boolConditional: {
      sheet: 'NightOnTheMilkyWay',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'NightOnTheMilkyWay',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'NightOnTheMilkyWay',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  NowhereToRun: {
    boolConditional: {
      sheet: 'NowhereToRun',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'NowhereToRun',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'NowhereToRun',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  OnTheFallOfAnAeon: {
    boolConditional: {
      sheet: 'OnTheFallOfAnAeon',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'OnTheFallOfAnAeon',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'OnTheFallOfAnAeon',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  OnlySilenceRemains: {
    boolConditional: {
      sheet: 'OnlySilenceRemains',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'OnlySilenceRemains',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'OnlySilenceRemains',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  Passkey: {
    boolConditional: {
      sheet: 'Passkey',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'Passkey',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'Passkey',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  PastAndFuture: {
    boolConditional: {
      sheet: 'PastAndFuture',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'PastAndFuture',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'PastAndFuture',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  PastSelfInMirror: {
    boolConditional: {
      sheet: 'PastSelfInMirror',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'PastSelfInMirror',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'PastSelfInMirror',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  PatienceIsAllYouNeed: {
    boolConditional: {
      sheet: 'PatienceIsAllYouNeed',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'PatienceIsAllYouNeed',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'PatienceIsAllYouNeed',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  PerfectTiming: {
    boolConditional: {
      sheet: 'PerfectTiming',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'PerfectTiming',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'PerfectTiming',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  Pioneering: {
    boolConditional: {
      sheet: 'Pioneering',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'Pioneering',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'Pioneering',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  PlanetaryRendezvous: {
    boolConditional: {
      sheet: 'PlanetaryRendezvous',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'PlanetaryRendezvous',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'PlanetaryRendezvous',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  PostOpConversation: {
    boolConditional: {
      sheet: 'PostOpConversation',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'PostOpConversation',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'PostOpConversation',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  QuidProQuo: {
    boolConditional: {
      sheet: 'QuidProQuo',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'QuidProQuo',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'QuidProQuo',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  ReforgedRemembrance: {
    boolConditional: {
      sheet: 'ReforgedRemembrance',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'ReforgedRemembrance',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'ReforgedRemembrance',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  ResolutionShinesAsPearlsOfSweat: {
    boolConditional: {
      sheet: 'ResolutionShinesAsPearlsOfSweat',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'ResolutionShinesAsPearlsOfSweat',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'ResolutionShinesAsPearlsOfSweat',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  ReturnToDarkness: {
    boolConditional: {
      sheet: 'ReturnToDarkness',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'ReturnToDarkness',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'ReturnToDarkness',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  RiverFlowsInSpring: {
    boolConditional: {
      sheet: 'RiverFlowsInSpring',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'RiverFlowsInSpring',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'RiverFlowsInSpring',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  Sagacity: {
    boolConditional: {
      sheet: 'Sagacity',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'Sagacity',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'Sagacity',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  SharedFeeling: {
    boolConditional: {
      sheet: 'SharedFeeling',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'SharedFeeling',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'SharedFeeling',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  ShatteredHome: {
    boolConditional: {
      sheet: 'ShatteredHome',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'ShatteredHome',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'ShatteredHome',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  SheAlreadyShutHerEyes: {
    boolConditional: {
      sheet: 'SheAlreadyShutHerEyes',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'SheAlreadyShutHerEyes',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'SheAlreadyShutHerEyes',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  SleepLikeTheDead: {
    boolConditional: {
      sheet: 'SleepLikeTheDead',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'SleepLikeTheDead',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'SleepLikeTheDead',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  SolitaryHealing: {
    boolConditional: {
      sheet: 'SolitaryHealing',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'SolitaryHealing',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'SolitaryHealing',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  SomethingIrreplaceable: {
    boolConditional: {
      sheet: 'SomethingIrreplaceable',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'SomethingIrreplaceable',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'SomethingIrreplaceable',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  SubscribeForMore: {
    boolConditional: {
      sheet: 'SubscribeForMore',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'SubscribeForMore',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'SubscribeForMore',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  Swordplay: {
    boolConditional: {
      sheet: 'Swordplay',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'Swordplay',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'Swordplay',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  TextureOfMemories: {
    boolConditional: {
      sheet: 'TextureOfMemories',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'TextureOfMemories',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'TextureOfMemories',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  TheBirthOfTheSelf: {
    boolConditional: {
      sheet: 'TheBirthOfTheSelf',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'TheBirthOfTheSelf',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'TheBirthOfTheSelf',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  TheDayTheCosmosFell: {
    boolConditional: {
      sheet: 'TheDayTheCosmosFell',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'TheDayTheCosmosFell',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'TheDayTheCosmosFell',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  TheMolesWelcomeYou: {
    boolConditional: {
      sheet: 'TheMolesWelcomeYou',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'TheMolesWelcomeYou',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'TheMolesWelcomeYou',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  TheSeriousnessOfBreakfast: {
    stackCount: {
      sheet: 'TheSeriousnessOfBreakfast',
      name: 'stackCount',
      type: 'num',
      int_only: true,
      min: 0,
      max: -1,
    },
  },
  TheUnreachableSide: {
    boolConditional: {
      sheet: 'TheUnreachableSide',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'TheUnreachableSide',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'TheUnreachableSide',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  ThisIsMe: {
    boolConditional: {
      sheet: 'ThisIsMe',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'ThisIsMe',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'ThisIsMe',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  TimeWaitsForNoOne: {
    boolConditional: {
      sheet: 'TimeWaitsForNoOne',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'TimeWaitsForNoOne',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'TimeWaitsForNoOne',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  TodayIsAnotherPeacefulDay: {
    boolConditional: {
      sheet: 'TodayIsAnotherPeacefulDay',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'TodayIsAnotherPeacefulDay',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'TodayIsAnotherPeacefulDay',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  TrendOfTheUniversalMarket: {
    boolConditional: {
      sheet: 'TrendOfTheUniversalMarket',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'TrendOfTheUniversalMarket',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'TrendOfTheUniversalMarket',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  UnderTheBlueSky: {
    boolConditional: {
      sheet: 'UnderTheBlueSky',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'UnderTheBlueSky',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'UnderTheBlueSky',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  Void: {
    boolConditional: { sheet: 'Void', name: 'boolConditional', type: 'bool' },
    listConditional: {
      sheet: 'Void',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'Void',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  WarmthShortensColdNights: {
    boolConditional: {
      sheet: 'WarmthShortensColdNights',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'WarmthShortensColdNights',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'WarmthShortensColdNights',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  WeAreWildfire: {
    boolConditional: {
      sheet: 'WeAreWildfire',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'WeAreWildfire',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'WeAreWildfire',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  WeWillMeetAgain: {
    boolConditional: {
      sheet: 'WeWillMeetAgain',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'WeWillMeetAgain',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'WeWillMeetAgain',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  WhatIsReal: {
    boolConditional: {
      sheet: 'WhatIsReal',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'WhatIsReal',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'WhatIsReal',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  WoofWalkTime: {
    boolConditional: {
      sheet: 'WoofWalkTime',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'WoofWalkTime',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'WoofWalkTime',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
  WorrisomeBlissful: {
    boolConditional: {
      sheet: 'WorrisomeBlissful',
      name: 'boolConditional',
      type: 'bool',
    },
    listConditional: {
      sheet: 'WorrisomeBlissful',
      name: 'listConditional',
      type: 'list',
      list: ['val1', 'val2'],
    },
    numConditional: {
      sheet: 'WorrisomeBlissful',
      name: 'numConditional',
      type: 'num',
      int_only: true,
      min: 0,
      max: 2,
    },
  },
}
export const formulas = {
  Acheron: {
    basicDmg_0: {
      sheet: 'Acheron',
      name: 'basicDmg_0',
      tag: {
        et: 'self',
        qt: 'formula',
        q: 'dmg',
        sheet: 'Acheron',
        name: 'basicDmg_0',
      },
    },
  },
  Argenti: {
    basicDmg_0: {
      sheet: 'Argenti',
      name: 'basicDmg_0',
      tag: {
        et: 'self',
        qt: 'formula',
        q: 'dmg',
        sheet: 'Argenti',
        name: 'basicDmg_0',
      },
    },
  },
  Arlan: {
    basicDmg_0: {
      sheet: 'Arlan',
      name: 'basicDmg_0',
      tag: {
        et: 'self',
        qt: 'formula',
        q: 'dmg',
        sheet: 'Arlan',
        name: 'basicDmg_0',
      },
    },
  },
  Asta: {
    basicDmg_0: {
      sheet: 'Asta',
      name: 'basicDmg_0',
      tag: {
        et: 'self',
        qt: 'formula',
        q: 'dmg',
        sheet: 'Asta',
        name: 'basicDmg_0',
      },
    },
  },
  Aventurine: {
    basicDmg_0: {
      sheet: 'Aventurine',
      name: 'basicDmg_0',
      tag: {
        et: 'self',
        qt: 'formula',
        q: 'dmg',
        sheet: 'Aventurine',
        name: 'basicDmg_0',
      },
    },
  },
  Bailu: {
    basicDmg_0: {
      sheet: 'Bailu',
      name: 'basicDmg_0',
      tag: {
        et: 'self',
        qt: 'formula',
        q: 'dmg',
        sheet: 'Bailu',
        name: 'basicDmg_0',
      },
    },
  },
  BlackSwan: {
    basicDmg_0: {
      sheet: 'BlackSwan',
      name: 'basicDmg_0',
      tag: {
        et: 'self',
        qt: 'formula',
        q: 'dmg',
        sheet: 'BlackSwan',
        name: 'basicDmg_0',
      },
    },
  },
  Blade: {
    basicDmg_0: {
      sheet: 'Blade',
      name: 'basicDmg_0',
      tag: {
        et: 'self',
        qt: 'formula',
        q: 'dmg',
        sheet: 'Blade',
        name: 'basicDmg_0',
      },
    },
  },
  Bronya: {
    basicDmg_0: {
      sheet: 'Bronya',
      name: 'basicDmg_0',
      tag: {
        et: 'self',
        qt: 'formula',
        q: 'dmg',
        sheet: 'Bronya',
        name: 'basicDmg_0',
      },
    },
  },
  Clara: {
    basicDmg_0: {
      sheet: 'Clara',
      name: 'basicDmg_0',
      tag: {
        et: 'self',
        qt: 'formula',
        q: 'dmg',
        sheet: 'Clara',
        name: 'basicDmg_0',
      },
    },
  },
  DanHeng: {
    basicDmg_0: {
      sheet: 'DanHeng',
      name: 'basicDmg_0',
      tag: {
        et: 'self',
        qt: 'formula',
        q: 'dmg',
        sheet: 'DanHeng',
        name: 'basicDmg_0',
      },
    },
  },
  DanHengImbibitorLunae: {
    basicDmg_0: {
      sheet: 'DanHengImbibitorLunae',
      name: 'basicDmg_0',
      tag: {
        et: 'self',
        qt: 'formula',
        q: 'dmg',
        sheet: 'DanHengImbibitorLunae',
        name: 'basicDmg_0',
      },
    },
  },
  DrRatio: {
    basicDmg_0: {
      sheet: 'DrRatio',
      name: 'basicDmg_0',
      tag: {
        et: 'self',
        qt: 'formula',
        q: 'dmg',
        sheet: 'DrRatio',
        name: 'basicDmg_0',
      },
    },
  },
  FuXuan: {
    basicDmg_0: {
      sheet: 'FuXuan',
      name: 'basicDmg_0',
      tag: {
        et: 'self',
        qt: 'formula',
        q: 'dmg',
        sheet: 'FuXuan',
        name: 'basicDmg_0',
      },
    },
  },
  Gallagher: {
    basicDmg_0: {
      sheet: 'Gallagher',
      name: 'basicDmg_0',
      tag: {
        et: 'self',
        qt: 'formula',
        q: 'dmg',
        sheet: 'Gallagher',
        name: 'basicDmg_0',
      },
    },
  },
  Gepard: {
    basicDmg_0: {
      sheet: 'Gepard',
      name: 'basicDmg_0',
      tag: {
        et: 'self',
        qt: 'formula',
        q: 'dmg',
        sheet: 'Gepard',
        name: 'basicDmg_0',
      },
    },
  },
  Guinaifen: {
    basicDmg_0: {
      sheet: 'Guinaifen',
      name: 'basicDmg_0',
      tag: {
        et: 'self',
        qt: 'formula',
        q: 'dmg',
        sheet: 'Guinaifen',
        name: 'basicDmg_0',
      },
    },
  },
  Hanya: {
    basicDmg_0: {
      sheet: 'Hanya',
      name: 'basicDmg_0',
      tag: {
        et: 'self',
        qt: 'formula',
        q: 'dmg',
        sheet: 'Hanya',
        name: 'basicDmg_0',
      },
    },
  },
  Herta: {
    basicDmg_0: {
      sheet: 'Herta',
      name: 'basicDmg_0',
      tag: {
        et: 'self',
        qt: 'formula',
        q: 'dmg',
        sheet: 'Herta',
        name: 'basicDmg_0',
      },
    },
  },
  Himeko: {
    basicDmg_0: {
      sheet: 'Himeko',
      name: 'basicDmg_0',
      tag: {
        et: 'self',
        qt: 'formula',
        q: 'dmg',
        sheet: 'Himeko',
        name: 'basicDmg_0',
      },
    },
  },
  Hook: {
    basicDmg_0: {
      sheet: 'Hook',
      name: 'basicDmg_0',
      tag: {
        et: 'self',
        qt: 'formula',
        q: 'dmg',
        sheet: 'Hook',
        name: 'basicDmg_0',
      },
    },
  },
  Huohuo: {
    basicDmg_0: {
      sheet: 'Huohuo',
      name: 'basicDmg_0',
      tag: {
        et: 'self',
        qt: 'formula',
        q: 'dmg',
        sheet: 'Huohuo',
        name: 'basicDmg_0',
      },
    },
  },
  JingYuan: {
    basicDmg_0: {
      sheet: 'JingYuan',
      name: 'basicDmg_0',
      tag: {
        et: 'self',
        qt: 'formula',
        q: 'dmg',
        sheet: 'JingYuan',
        name: 'basicDmg_0',
      },
    },
  },
  Jingliu: {
    basicDmg_0: {
      sheet: 'Jingliu',
      name: 'basicDmg_0',
      tag: {
        et: 'self',
        qt: 'formula',
        q: 'dmg',
        sheet: 'Jingliu',
        name: 'basicDmg_0',
      },
    },
  },
  Kafka: {
    basicDmg_0: {
      sheet: 'Kafka',
      name: 'basicDmg_0',
      tag: {
        et: 'self',
        qt: 'formula',
        q: 'dmg',
        sheet: 'Kafka',
        name: 'basicDmg_0',
      },
    },
  },
  Luka: {
    basicDmg_0: {
      sheet: 'Luka',
      name: 'basicDmg_0',
      tag: {
        et: 'self',
        qt: 'formula',
        q: 'dmg',
        sheet: 'Luka',
        name: 'basicDmg_0',
      },
    },
  },
  Luocha: {
    basicDmg_0: {
      sheet: 'Luocha',
      name: 'basicDmg_0',
      tag: {
        et: 'self',
        qt: 'formula',
        q: 'dmg',
        sheet: 'Luocha',
        name: 'basicDmg_0',
      },
    },
  },
  Lynx: {
    basicDmg_0: {
      sheet: 'Lynx',
      name: 'basicDmg_0',
      tag: {
        et: 'self',
        qt: 'formula',
        q: 'dmg',
        sheet: 'Lynx',
        name: 'basicDmg_0',
      },
    },
  },
  March7th: {
    basicDmg_0: {
      sheet: 'March7th',
      name: 'basicDmg_0',
      tag: {
        et: 'self',
        qt: 'formula',
        q: 'dmg',
        sheet: 'March7th',
        name: 'basicDmg_0',
      },
    },
    skillShield: {
      sheet: 'March7th',
      name: 'skillShield',
      tag: {
        et: 'self',
        qt: 'formula',
        q: 'shield',
        sheet: 'March7th',
        name: 'skillShield',
      },
    },
    ultDmg_0: {
      sheet: 'March7th',
      name: 'ultDmg_0',
      tag: {
        et: 'self',
        qt: 'formula',
        q: 'dmg',
        sheet: 'March7th',
        name: 'ultDmg_0',
      },
    },
    ultDmg_1: {
      sheet: 'March7th',
      name: 'ultDmg_1',
      tag: {
        et: 'self',
        qt: 'formula',
        q: 'dmg',
        sheet: 'March7th',
        name: 'ultDmg_1',
      },
    },
    ultDmg_2: {
      sheet: 'March7th',
      name: 'ultDmg_2',
      tag: {
        et: 'self',
        qt: 'formula',
        q: 'dmg',
        sheet: 'March7th',
        name: 'ultDmg_2',
      },
    },
    ultDmg_3: {
      sheet: 'March7th',
      name: 'ultDmg_3',
      tag: {
        et: 'self',
        qt: 'formula',
        q: 'dmg',
        sheet: 'March7th',
        name: 'ultDmg_3',
      },
    },
    ultFreeze_0: {
      sheet: 'March7th',
      name: 'ultFreeze_0',
      tag: {
        et: 'self',
        qt: 'formula',
        q: 'dmg',
        sheet: 'March7th',
        name: 'ultFreeze_0',
      },
    },
    talentDmg_0: {
      sheet: 'March7th',
      name: 'talentDmg_0',
      tag: {
        et: 'self',
        qt: 'formula',
        q: 'dmg',
        sheet: 'March7th',
        name: 'talentDmg_0',
      },
    },
    techniqueFreeze_0: {
      sheet: 'March7th',
      name: 'techniqueFreeze_0',
      tag: {
        et: 'self',
        qt: 'formula',
        q: 'dmg',
        sheet: 'March7th',
        name: 'techniqueFreeze_0',
      },
    },
    e1Shield: {
      sheet: 'March7th',
      name: 'e1Shield',
      tag: {
        et: 'self',
        qt: 'formula',
        q: 'shield',
        sheet: 'March7th',
        name: 'e1Shield',
      },
    },
    e6Heal: {
      sheet: 'March7th',
      name: 'e6Heal',
      tag: {
        et: 'self',
        qt: 'formula',
        q: 'heal',
        sheet: 'March7th',
        name: 'e6Heal',
      },
    },
  },
  Misha: {
    basicDmg_0: {
      sheet: 'Misha',
      name: 'basicDmg_0',
      tag: {
        et: 'self',
        qt: 'formula',
        q: 'dmg',
        sheet: 'Misha',
        name: 'basicDmg_0',
      },
    },
  },
  Natasha: {
    basicDmg_0: {
      sheet: 'Natasha',
      name: 'basicDmg_0',
      tag: {
        et: 'self',
        qt: 'formula',
        q: 'dmg',
        sheet: 'Natasha',
        name: 'basicDmg_0',
      },
    },
  },
  Pela: {
    basicDmg_0: {
      sheet: 'Pela',
      name: 'basicDmg_0',
      tag: {
        et: 'self',
        qt: 'formula',
        q: 'dmg',
        sheet: 'Pela',
        name: 'basicDmg_0',
      },
    },
  },
  Qingque: {
    basicDmg_0: {
      sheet: 'Qingque',
      name: 'basicDmg_0',
      tag: {
        et: 'self',
        qt: 'formula',
        q: 'dmg',
        sheet: 'Qingque',
        name: 'basicDmg_0',
      },
    },
  },
  RuanMei: {
    basicDmg_0: {
      sheet: 'RuanMei',
      name: 'basicDmg_0',
      tag: {
        et: 'self',
        qt: 'formula',
        q: 'dmg',
        sheet: 'RuanMei',
        name: 'basicDmg_0',
      },
    },
  },
  Sampo: {
    basicDmg_0: {
      sheet: 'Sampo',
      name: 'basicDmg_0',
      tag: {
        et: 'self',
        qt: 'formula',
        q: 'dmg',
        sheet: 'Sampo',
        name: 'basicDmg_0',
      },
    },
  },
  Seele: {
    basicDmg_0: {
      sheet: 'Seele',
      name: 'basicDmg_0',
      tag: {
        et: 'self',
        qt: 'formula',
        q: 'dmg',
        sheet: 'Seele',
        name: 'basicDmg_0',
      },
    },
  },
  Serval: {
    basicDmg_0: {
      sheet: 'Serval',
      name: 'basicDmg_0',
      tag: {
        et: 'self',
        qt: 'formula',
        q: 'dmg',
        sheet: 'Serval',
        name: 'basicDmg_0',
      },
    },
  },
  SilverWolf: {
    basicDmg_0: {
      sheet: 'SilverWolf',
      name: 'basicDmg_0',
      tag: {
        et: 'self',
        qt: 'formula',
        q: 'dmg',
        sheet: 'SilverWolf',
        name: 'basicDmg_0',
      },
    },
  },
  Sparkle: {
    basicDmg_0: {
      sheet: 'Sparkle',
      name: 'basicDmg_0',
      tag: {
        et: 'self',
        qt: 'formula',
        q: 'dmg',
        sheet: 'Sparkle',
        name: 'basicDmg_0',
      },
    },
  },
  Sushang: {
    basicDmg_0: {
      sheet: 'Sushang',
      name: 'basicDmg_0',
      tag: {
        et: 'self',
        qt: 'formula',
        q: 'dmg',
        sheet: 'Sushang',
        name: 'basicDmg_0',
      },
    },
  },
  Tingyun: {
    basicDmg_0: {
      sheet: 'Tingyun',
      name: 'basicDmg_0',
      tag: {
        et: 'self',
        qt: 'formula',
        q: 'dmg',
        sheet: 'Tingyun',
        name: 'basicDmg_0',
      },
    },
  },
  TopazAndNumby: {
    basicDmg_0: {
      sheet: 'TopazAndNumby',
      name: 'basicDmg_0',
      tag: {
        et: 'self',
        qt: 'formula',
        q: 'dmg',
        sheet: 'TopazAndNumby',
        name: 'basicDmg_0',
      },
    },
  },
  Welt: {
    basicDmg_0: {
      sheet: 'Welt',
      name: 'basicDmg_0',
      tag: {
        et: 'self',
        qt: 'formula',
        q: 'dmg',
        sheet: 'Welt',
        name: 'basicDmg_0',
      },
    },
  },
  Xueyi: {
    basicDmg_0: {
      sheet: 'Xueyi',
      name: 'basicDmg_0',
      tag: {
        et: 'self',
        qt: 'formula',
        q: 'dmg',
        sheet: 'Xueyi',
        name: 'basicDmg_0',
      },
    },
  },
  Yanqing: {
    basicDmg_0: {
      sheet: 'Yanqing',
      name: 'basicDmg_0',
      tag: {
        et: 'self',
        qt: 'formula',
        q: 'dmg',
        sheet: 'Yanqing',
        name: 'basicDmg_0',
      },
    },
  },
  Yukong: {
    basicDmg_0: {
      sheet: 'Yukong',
      name: 'basicDmg_0',
      tag: {
        et: 'self',
        qt: 'formula',
        q: 'dmg',
        sheet: 'Yukong',
        name: 'basicDmg_0',
      },
    },
  },
}
