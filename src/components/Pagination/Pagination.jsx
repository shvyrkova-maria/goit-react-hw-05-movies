import queryString from 'query-string';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import { useHistory, useLocation } from 'react-router';
import ReactPaginate from 'react-paginate';
import s from 'components/Pagination/Pagination.module.css';

function Pagination({ pages, page }) {
  const history = useHistory();
  const location = useLocation();

  const handlePageClick = data => {
    let selectedPage = data.selected + 1;

    if (location.search.includes('query')) {
      const searchQuery = queryString.parse(location.search).query;
      history.push({
        ...location,
        search: `query=${searchQuery}&page=${selectedPage}`,
      });
    } else {
      history.push({
        ...location,
        search: `page=${selectedPage}`,
      });
    }
  };

  return (
    <div className={s.wrap}>
      <ReactPaginate
        previousLabel={<BiLeftArrow className={s.arrow} />}
        nextLabel={<BiRightArrow className={s.arrow} />}
        breakLabel={'...'}
        breakClassName={s.break}
        pageCount={pages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={s.container}
        pageClassName={s.page}
        activeClassName={s.active}
        pageLinkClassName={s.link}
        initialPage={page - 1}
        disableInitialCallback={true}
        forcePage={page - 1}
      />
    </div>
  );
}

export default Pagination;
