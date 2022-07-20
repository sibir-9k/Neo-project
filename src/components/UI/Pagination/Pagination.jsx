import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Pagination, PaginationItem } from "@mui/material";
import { changePage } from "../../../store/slices/claimSlice"
import "./Pagination.scss"

export const Paginationn = () => {

  const { page, totalItems } = useSelector(state => state.claim)

  const dispatch = useDispatch()

  const getPageCount = (count) => {

    return Math.ceil(count / 10);
  };

  const onChangeHandle = (_, num) => {
    dispatch(changePage(num))
  }

  return (
    <div>
      <Pagination
        variant="outlined"
        shape="rounded"

        count={getPageCount(totalItems)}
        page={page}
        onChange={onChangeHandle}

        showFirstButton
        showLastButton

        sx={{
          marginY: 4,
          display: 'flex',
          justifyContent: 'flex-end'
        }}

        renderItem={(item) => (
          <PaginationItem
            sx={{ color: "#7DB59A", border: '1px solid #7DB59A' }}
            {...item}
          />
        )}
      />

    </div>
  )
}
