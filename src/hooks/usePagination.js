import { useState } from "react";


export const usePagination = (filter) => {
    const [itensPerPage, setItensPerPage]=useState(13)

	const [currentPage,setCurrentPage] = useState(0)


	const startIndex= currentPage*itensPerPage;
	const endIndex = startIndex + itensPerPage
	const currentItens = filter.slice(startIndex,endIndex)
     


    return { currentItens,itensPerPage, setItensPerPage}
};