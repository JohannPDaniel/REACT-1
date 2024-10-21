export interface Transaction {
	id: string;
	type: string | undefined;
	value: number;
	description: string;
	createdAt: Date;
}
