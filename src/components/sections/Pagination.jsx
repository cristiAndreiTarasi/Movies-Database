import React, { useState } from 'react';

export default function ({ totalPages, page, setPage }) {
    const pages = [];
    // let disabled = page == 1 ? 'disabled' : '';

    for (let i = 1; i < totalPages; i++) {
        let active = page === i ? 'active' : '';
        pages.push(
            <li 
                key={i}
                className={`page_item ${active}`}
                onClick={() => setPage(i)}
            >
                <a className="page-link" href="#">
                    {i}
                </a>
            </li>
        );
    }

    return (
        <nav aria-label="...">
            <ul className="pagination">
                {page !== 1 ? (
                    <li 
                        className={`page-item ${page === 1 ? 'disabled' : ''}`}
                        onClick={() => setPage(page - 1)}
                    >
                        <a className="page-link" href="#" tabIndex="-1">Previous</a>
                    </li>
                ) : ''}

                {pages}

                {page !== 11 ? (
                    <li 
                        className={`page-item ${page === pages.length ? 'disabled' : ''}`}
                        onClick={() => setPage(page + 1)}
                    >
                        <a className="page-link" href="#">Next</a>
                    </li>
                ) : ''}
            </ul>
        </nav>
    );
}

/*

*/