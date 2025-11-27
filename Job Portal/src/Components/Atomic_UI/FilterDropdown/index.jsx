// let Dropdown.CheckBox = ({ title, items, Dropdown }) => {
//     const [isOpen, setIsOpen] = useState(false);

//     return (
//         <div className="w-full mx-auto font-sans dark:bg-dark-secondary">
//             {/* Heading */}
//             <div
//                 onClick={() => setIsOpen(!isOpen)}
//                 className="dark:bg-dark-secondary dark:text-white px-4 py-2.5 bg-white cursor-pointer select-none flex items-center justify-between border-b dark:border-[rgba(225,225,225,0.1)] border-[#e3e3e3] "
//             >
//                 <span className={`font-Rubik font-medium  ${isOpen == true ? 'text-primary' : 'text-green'}`}>{title}</span>
//                 {(isOpen ? <FaMinus className='text-[12px] text-primary hover:text-primary' /> : <FaPlus className='text-[12px] hover:text-primary' />)}
//             </div>

//             {/* Dropdown list */}
//             <div
//                 className={`overflow-hidden transition-all duration-500 ease-in-out border-b border-[#e3e3e3] dark:border-[rgba(225,225,225,0.1)]   ${isOpen ? "max-h-60 opacity-100 py-6 pl-1.5" : "max-h-0 opacity-0 py-0"
//                     }`}
//             >
//                 {items.map((item, index) => (
//                     <li key={index} className="px-4 dark:text-white">
//                         <CheckBox label={items[index]} />
//                     </li>
//                 ))}
//             </div>
//         </div>
//     );
// };