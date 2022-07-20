  export const formatDate = (date) => {
    const parsedDate  = new Date(date)
    return parsedDate.toLocaleDateString("ru-RU", "DD/MM/YYYY")
  } 