import React from 'react';

class Background extends React.Component {
  render() {
    return (
      <div id='carouselitem' className='carousel slide' data-ride='carousel'>
        <ol className='carousel-indicators'>
          <li data-target='#carouselitem' data-slide-to="0" className='active'></li>
          <li data-target='#carouselitem' data-slide-to="1"></li>
          <li data-target='#carouselitem' data-slide-to="2"></li>
          <li data-target='#carouselitem' data-slide-to="3"></li>
        </ol>

        <div className='carousel-inner' role='listbox'>
          <div className='carousel-item'>
            <img className='d-block img-fluid'
              src='https://cdn.wallpapersafari.com/86/44/ef3Xm7.jpg'
              alt='Nike Shoe' />
          </div>
          <div className='carousel-item active'>
            <img className='d-block img-fluid'
              src='https://images4.alphacoders.com/632/thumb-1920-632661.jpg'
              alt='Nike Shoe' />
          </div>

          <div className='carousel-item'>
            <img className='d-block img-fluid'
              src='https://images3.alphacoders.com/211/211749.jpg'
              alt='Adidas Shoe' />
          </div>
          <div className='carousel-item'>
            <img className='d-block img-fluid'
              src='http://cdn.miscellaneoushi.com/1440x900/20121019/adidas%20logos%201440x900%20wallpaper_www.miscellaneoushi.com_6.jpg'
              alt='Adidas Shoe' />
          </div>
        </div>

        <a className='carousel-control-prev' href='#carouselitem' role='button' data-slide='prev'>
          <span className='carousel-control-prev-icon'></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className='carousel-control-next' href="#carouselitem" data-slide="next">
          <span className='carousel-control-next-icon'></span>
          <span className='sr-only'>Next</span>
        </a>
      </div>
    )
  }
}
export default Background;