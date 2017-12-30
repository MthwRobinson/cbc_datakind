export class Activity {
  constructor(
  	public caseName: string, 
  	public activityType: string,
  	public expectedDuration: number,
  	public address: string,
  	public city: string,
  	public state: string,
  	public zipCode: string){}
}
