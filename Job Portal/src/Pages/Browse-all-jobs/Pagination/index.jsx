import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // optional (from lucide-react)

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <div className="flex items-center justify-center mt-8 space-x-4">
            {/* Prev Button */}
            <button
                onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`py-2 px-3.5 rounded border border-[#ebebeb] shadow-sm transition-all duration-200 flex items-center 
                    ${currentPage === 1
                        ? "bg-gray-100 text-[#767676] cursor-not-allowed"
                        : "bg-white hover:bg-primary hover:text-white hover:border-primary text-gray-700"}`}
            >
                <FaArrowLeft size={18} />
                <span className="ml-1.5 font-Montserrat">Next</span>
            </button>

            {/* Next Button */}
            <button
                onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-3.5 py-2 rounded border shadow-sm transition-all duration-200  flex items-center
          ${currentPage === totalPages
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                        : "bg-white hover:bg-blue-50 hover:border-blue-400 text-gray-700"}`}
            >
                <span className="mr-1.5">Prev</span>
                <FaArrowRight size={18} />
            </button>
        </div>
    );
};

export default Pagination;
