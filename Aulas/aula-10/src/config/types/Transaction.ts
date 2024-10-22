export interface Transaction {
	id: string;
	type: string;
	value: number;
	description: string;
	createdAt: Date;
}
