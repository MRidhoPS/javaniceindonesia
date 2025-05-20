'use client';

import React from 'react'
import { useState } from 'react';
import axios from 'axios';

export default function HomePage() {
    const [downloadStatus, setDownloadStatus] = useState('');

    const downloadPdf = async () => {
        try {
            const response = await axios.get('/api/download', {
                responseType: 'blob',
            });

            const contentDisposition = response.headers['content-disposition'];
            const fileNameMatch = contentDisposition?.match(/filename="(.+)"/);
            const fileName = fileNameMatch ? fileNameMatch[1] : 'company-profile.pdf';

            const blob = new Blob([response.data], { type: response.headers['content-type'] });
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', fileName);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);

            setDownloadStatus('Downloaded successfully');
        } catch (error) {
            console.error('Error downloading file:', error);
            setDownloadStatus('Error downloading file');
        }
    };
  return (
      <section id='home' className='min-h-screen'>
          <div className='bg-white'>
              <div className="px-6 pt-14 items-center justify-center lg:px-8 bg-white">
                  <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
                      <div className="text-center">
                          <h1 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                              PT. JAVANICE INDONESIA PERKASA
                          </h1>
                          <p className="mt-8 text-lg text-gray-500 sm:text-xl">
                              Diakui sebagai perusahaan yang unggul dalam Pelayanan, Kualitas, Dipercaya, dan Profesional.
                          </p>
                          <div className="mt-10 flex justify-center">
                              <button
                                  type="button"
                                  onClick={downloadPdf}
                                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                              >
                                  Download Company Profile
                              </button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  )
}
