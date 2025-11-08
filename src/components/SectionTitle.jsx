import React from 'react'

const SectionTitle = ({ icon: Icon, title }) => {
  return <h2 className="text-4xl font-bold text-white mb-12 flex items-center justify-center">
    <Icon className="w-8 h-8 mr-4 text-teal-400" />
    {title}
  </h2>
};

export default SectionTitle;