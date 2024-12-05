export default async function paginationFunction(
  data: any[],
  page: number,
  pageSize: number
) {
  const totalPages = Math.ceil(data.length / pageSize);

  if (page && (page < 1 || page > totalPages)) {
    throw Error("Invalid page number");
  }
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedResult = data.slice(startIndex, endIndex);

  return {
    data: paginatedResult,
    totalPages: totalPages,
    currentPage: page,
  };
}