export interface IPagination<DATA> {
    page: number,
    total_results:number,
    // total_pages: number,
    results: DATA[],
}
