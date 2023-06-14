import React from 'react'

const Map = () => {
  return (
    <div>
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3646.800405380622!2d90.26420007551543!3d23.93212088177544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755e8672cea12f5%3A0x62424ac4af891588!2sM.A%20Mannan%20Tower!5e0!3m2!1sen!2sbd!4v1686715102842!5m2!1sen!2sbd"
        className="w-screen h-[40vh]"
        allowFullScreen="{true}"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Map;