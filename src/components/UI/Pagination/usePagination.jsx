// // import React from 'react';
// import { useMemo } from 'react';

// export const DOTS = '...';

// const range = (start, end) => {
//   let length = end - start + 1;
//   return Array.from({ length }, (_, idx) => idx + start);
// };

// export const usePagination = ({
//   totalCount,
//   pageSize,
//   siblingCount = 1,
//   currentPage
// }) => {
//   const paginationRange = useMemo(() => {
//     const totalPageCount = Math.ceil(totalCount / pageSize);

//     // Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
//     // const totalPageNumbers = siblingCount + 5;

//     /*
//       Calculate left and right sibling index and make sure they are within range 1 and totalPageCount
//     */
//     const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
//     const rightSiblingIndex = Math.min(
//       currentPage + siblingCount,
//       totalPageCount
//     );

//     /*
//       We do not show dots just when there is just one page number to be inserted between the extremes of sibling and the page limits i.e 1 and totalPageCount. Hence we are using leftSiblingIndex > 2 and rightSiblingIndex < totalPageCount - 2
//     */
//     const shouldShowLeftDots = leftSiblingIndex > 2;
//     const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

//     const firstPageIndex = 1;
//     const lastPageIndex = totalPageCount;

//     /*
//       Case 4: Both left and right dots to be shown
//     */
//     if (shouldShowLeftDots && shouldShowRightDots) {
//       let middleRange = range(leftSiblingIndex, rightSiblingIndex);
//       return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
//     }
//   }, [totalCount, pageSize, siblingCount, currentPage]);

//   return paginationRange;
// };