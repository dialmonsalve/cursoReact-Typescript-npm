export interface CRYPTOCURRENCY {
  Message: string;
  Type: number;
  MetaData: MetaData;
  SponsoredData: any[];
  Data: Datum[];
  RateLimit: RateLimit;
  HasWarning: boolean;
}

interface RateLimit {
}

interface Datum {
  CoinInfo: CoinInfo;
  RAW: RAW;
  DISPLAY: DISPLAY;
}

interface DISPLAY {
  USD: RESULT2;
}

interface RESULT2 {
  CHANGE24HOUR: string;
  CHANGEDAY: string;
  CHANGEHOUR: string;
  CHANGEPCT24HOUR: string;
  CHANGEPCTDAY: string;
  CHANGEPCTHOUR: string;
  CIRCULATINGSUPPLY: string;
  CIRCULATINGSUPPLYMKTCAP: string;
  CONVERSIONSYMBOL: string;
  CONVERSIONTYPE: string;
  FROMSYMBOL: string;
  HIGH24HOUR: string;
  HIGHDAY: string;
  HIGHHOUR: string;
  IMAGEURL: string;
  LASTMARKET: string;
  LASTTRADEID: string;
  LASTUPDATE: string;
  LASTVOLUME: string;
  LASTVOLUMETO: string;
  LOW24HOUR: string;
  LOWDAY: string;
  LOWHOUR: string;
  MARKET: string;
  MKTCAP: string;
  MKTCAPPENALTY: string;
  OPEN24HOUR: string;
  OPENDAY: string;
  OPENHOUR: string;
  PRICE: string;
  SUPPLY: string;
  TOPTIERVOLUME24HOUR: string;
  TOPTIERVOLUME24HOURTO: string;
  TOSYMBOL: string;
  TOTALTOPTIERVOLUME24H: string;
  TOTALTOPTIERVOLUME24HTO: string;
  TOTALVOLUME24H: string;
  TOTALVOLUME24HTO: string;
  VOLUME24HOUR: string;
  VOLUME24HOURTO: string;
  VOLUMEDAY: string;
  VOLUMEDAYTO: string;
  VOLUMEHOUR: string;
  VOLUMEHOURTO: string;
}

interface RAW {
  USD: RESULT;
}

interface RESULT {
  TYPE: string;
  MARKET: string;
  FROMSYMBOL: string;
  TOSYMBOL: string;
  FLAGS: string;
  PRICE: number;
  LASTUPDATE: number;
  MEDIAN: number;
  LASTVOLUME: number;
  LASTVOLUMETO: number;
  LASTTRADEID: string;
  VOLUMEDAY: number;
  VOLUMEDAYTO: number;
  VOLUME24HOUR: number;
  VOLUME24HOURTO: number;
  OPENDAY: number;
  HIGHDAY: number;
  LOWDAY: number;
  OPEN24HOUR: number;
  HIGH24HOUR: number;
  LOW24HOUR: number;
  LASTMARKET: string;
  VOLUMEHOUR: number;
  VOLUMEHOURTO: number;
  OPENHOUR: number;
  HIGHHOUR: number;
  LOWHOUR: number;
  TOPTIERVOLUME24HOUR: number;
  TOPTIERVOLUME24HOURTO: number;
  CHANGE24HOUR: number;
  CHANGEPCT24HOUR: number;
  CHANGEDAY: number;
  CHANGEPCTDAY: number;
  CHANGEHOUR: number;
  CHANGEPCTHOUR: number;
  CONVERSIONTYPE: string;
  CONVERSIONSYMBOL: string;
  SUPPLY: number;
  MKTCAP: number;
  MKTCAPPENALTY: number;
  CIRCULATINGSUPPLY: number;
  CIRCULATINGSUPPLYMKTCAP: number;
  TOTALVOLUME24H: number;
  TOTALVOLUME24HTO: number;
  TOTALTOPTIERVOLUME24H: number;
  TOTALTOPTIERVOLUME24HTO: number;
  IMAGEURL: string;
}

interface CoinInfo {
  Id: string;
  Name: string;
  FullName: string;
  Internal: string;
  ImageUrl: string;
  Url: string;
  Algorithm: string;
  ProofType: string;
  Rating: Rating;
  NetHashesPerSecond: number;
  BlockNumber: number;
  BlockTime: number;
  BlockReward: number;
  AssetLaunchDate: string;
  MaxSupply: number;
  Type: number;
  DocumentType: string;
}

interface Rating {
  Weiss: Weiss;
}

interface Weiss {
  Rating: string;
  TechnologyAdoptionRating: string;
  MarketPerformanceRating: string;
}

interface MetaData {
  Count: number;
}