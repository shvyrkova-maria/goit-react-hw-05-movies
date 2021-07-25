import { useHistory, useLocation } from 'react-router';
import ReactPaginate from 'react-paginate';

import s from 'components/Pagination/Pagination.module.css';

function Pagination({ pages }) {
  const history = useHistory();
  const location = useLocation();

  const handlePageClick = data => {
    let selectedPage = data.selected + 1;
    if (location.search.includes('query')) {
      const searchQuery = new URLSearchParams(location.search).get('query');
      history.push({
        ...location,
        search: `query=${searchQuery}&page=${selectedPage}`,
      });
    } else {
      history.push({ ...location, search: `page=${selectedPage}` });
    }
  };

  return (
    <div className={s.wrap}>
      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        //   breakClassName={'break-me'}
        pageCount={pages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={s.container}
        pageClassName={s.page}
        //   activeClassName={'s.active'}
      />
    </div>
  );
}

export default Pagination;
