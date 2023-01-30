
export interface COINS extends ABSCoins 
{
	id: string,
	name:string
}

type ABSCoins = {[id:string]:string}
