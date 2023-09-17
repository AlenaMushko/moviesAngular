export interface IPagination<DATA> {
    page: number,
    total_results:number,
    results: DATA[],
}
