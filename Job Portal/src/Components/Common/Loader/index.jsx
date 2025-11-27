import React from 'react';

import loader from '../../../assets/loading.svg'

export default function Loader() {
    return (
        <div className="fixed inset-0 h-screen w-screen flex items-center justify-center bg-white dark:bg-gray-900 z-50">
            <img src={loader} className='w-[60px]' />
        </div>
    );
}
