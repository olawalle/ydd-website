/** @format */

import Head from 'next/head'
import { Carousel } from 'antd'
import Nav from '../components/Nav'

export default function Home() {
  return (
    <div className='wrapper'>
      <div class='body'>
        <Nav />

        <Carousel>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
        </Carousel>
        <div class='lead-content clearfix '>
          <div class='lead-content-wrapper'>
            <div class='container'>
              <div class='row'>
                <div class='col-md-4 col-sm-4 featured-block featured-block-equal   '>
                  <h3>Our Community</h3>
                  <figure>
                    <a href='http://wp1.imithemes.com/adore-church-wp/?page_id=44'>
                      <img src='https://via.placeholder.com/350x150' alt='' />
                    </a>
                  </figure>{' '}
                  <div class='featured-block-equal-cont'>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Donec facilisis fermentum
                      sem, ac viverra.
                    </p>
                  </div>
                </div>
                <div class='col-md-4 col-sm-4 featured-block featured-block-equal   '>
                  <h3>Church Mission</h3>
                  <figure>
                    <a href='http://wp1.imithemes.com/adore-church-wp/?page_id=40'>
                      <img src='https://via.placeholder.com/350x150' alt='' />
                    </a>
                  </figure>{' '}
                  <div class='featured-block-equal-cont'>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Donec facilisis fermentum
                      sem, ac viverra.
                    </p>
                  </div>
                </div>
                <div class='col-md-4 col-sm-4 featured-block featured-block-equal   '>
                  <h3>Join a Group</h3>
                  <figure>
                    <a href='http://wp1.imithemes.com/adore-church-wp/?page_id=42'>
                      <img src='https://via.placeholder.com/350x150' alt='' />
                    </a>
                  </figure>{' '}
                  <div class='featured-block-equal-cont'>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Donec facilisis fermentum
                      sem, ac viverra.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class='main' role='main'>
          <div id='content' class='content full'>
            <div class='container'>
              <div class='row'>
                <div class='col-md-4 col-sm-5' id='sidebar-col'>
                  <div id='event_counter-1' class='widget sidebar-widget widget_event_counter'>
                    <section class='upcoming-event format-standard event-list-item event-dynamic'>
                      <a href='index33fe.html?event=sunday-meet-up&amp;event_date=2020-04-19' class='media-box'>
                        <img src='https://via.placeholder.com/350x150' class='attachment-600x400 size-600x400 wp-post-image' alt='' />
                      </a>
                      <div class='upcoming-event-content'>
                        <span class='label label-primary upcoming-event-label'>Next coming event</span>
                        <div id='event-counter-event_counter-1' class='counter clearfix' data-date='1587308401'>
                          <div class='timer-col'>
                            {' '}
                            <span id='days'></span> <span class='timer-type'>Days</span>{' '}
                          </div>
                          <div class='timer-col'>
                            {' '}
                            <span id='hours'></span> <span class='timer-type'>Hours</span>{' '}
                          </div>
                          <div class='timer-col'>
                            {' '}
                            <span id='minutes'></span> <span class='timer-type'>Minutes</span>{' '}
                          </div>
                          <div class='timer-col'>
                            {' '}
                            <span id='seconds'></span> <span class='timer-type'>Seconds</span>{' '}
                          </div>
                        </div>
                        <h3>
                          <a href='index33fe.html?event=sunday-meet-up&amp;event_date=2020-04-19' class='event-title'>
                            Sunday Meet Up
                          </a>
                        </h3>
                        <span class='meta-data'>
                          On <span class='event-date'>April 19, 2020</span> at <span class='event-time'>3:00 pm</span> at
                        </span>
                        <span class='meta-data event-location'>
                          {' '}
                          <span class='event-location-address'>55 Warren Street, New York, NY 10007, USA</span>
                        </span>
                      </div>
                      <div class='upcoming-event-footer'>
                        <a
                          id='imicregister-2763|1587308401'
                          href='#'
                          class='pull-right btn btn-primary btn-sm event-tickets event-register-button'
                        >
                          Register
                        </a>
                        <ul class='action-buttons'>
                          <li title='Share event'>
                            <a
                              href='#'
                              data-trigger='focus'
                              data-placement='top'
                              data-content=''
                              data-toggle='popover'
                              data-original-title='Share Event'
                              class='event-share-link'
                            >
                              <i class='icon-share'></i>
                            </a>
                          </li>
                          <li title='Get directions' class='hidden-xs'>
                            <a href='#' class='cover-overlay-trigger event-direction-link'>
                              <i class='icon-compass'></i>
                            </a>
                          </li>
                          <li title='Contact event manager'>
                            <a
                              id='imiccontact-2763|1587308401'
                              href='#'
                              data-toggle='modal'
                              data-target='#Econtact'
                              class='event-contact-link'
                            >
                              <i class='icon-mail'></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </section>
                  </div>
                </div>
                <div class='col-md-8 col-sm-7' id='content-col'>
                  <div class='element-block events-listing'>
                    <div class='events-listing-header'>
                      <h3 class='element-title'>Upcoming Events</h3>
                      <hr class='sm'></hr>
                    </div>
                    <div class='events-listing-content'>
                      <div class='event-list-item-date'>
                        <span class='event-date'>
                          <span class='event-day'>19</span>
                          <span class='event-month'>Apr, 20</span>
                        </span>
                      </div>
                      <div class='event-list-item-info'>
                        <div class='lined-info'>
                          <h4>
                            <a href='index33fe.html?event=sunday-meet-up&amp;event_date=2020-04-19' class='event-title'>
                              Sunday Meet Up
                            </a>
                          </h4>
                        </div>
                        <div class='lined-info'>
                          <span class='meta-data'>
                            <i class='fa fa-clock-o'></i> Sunday, <span class='event-time'>3:00 pm - 8:00 pm</span>{' '}
                            <span class='label label-primary'>Upcoming</span>
                          </span>
                        </div>
                        <div class='lined-info event-location'>
                          <span class='meta-data'>
                            <i class='fa fa-map-marker'></i>{' '}
                            <span class='event-location-address'>55 Warren Street, New York, NY 10007, USA</span>
                          </span>
                        </div>{' '}
                      </div>
                      <div class='event-list-item-actions'>
                        {' '}
                        <a
                          id='register-2763|1587308401'
                          href='#'
                          class='btn btn-default btn-transparent event-tickets event-register-button'
                        >
                          Register
                        </a>
                        <ul class='action-buttons'>
                          {' '}
                          <li title='Share Event'>
                            <a
                              href='#'
                              data-trigger='focus'
                              data-placement='top'
                              data-content=''
                              data-toggle='popover'
                              data-original-title='Share Event'
                              class='event-share-link'
                            >
                              <i class='icon-share'></i>
                            </a>
                          </li>{' '}
                          <li title='Get directions' class='hidden-xs'>
                            <a href='#' class='cover-overlay-trigger event-direction-link'>
                              <i class='icon-compass'></i>
                            </a>
                          </li>{' '}
                          <li title='Contact event manager'>
                            <a id='contact-2763|1587308401' href='#' data-toggle='modal' data-target='#Econtact' class='event-contact-link'>
                              <i class='icon-mail'></i>
                            </a>
                          </li>{' '}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class='element-block events-listing'>
                    <div class='events-listing-content'>
                      <div class='event-list-item-date'>
                        <span class='event-date'>
                          <span class='event-day'>19</span>
                          <span class='event-month'>Apr, 20</span>
                        </span>
                      </div>
                      <div class='event-list-item-info'>
                        <div class='lined-info'>
                          <h4>
                            <a href='index33fe.html?event=sunday-meet-up&amp;event_date=2020-04-19' class='event-title'>
                              Sunday Meet Up
                            </a>
                          </h4>
                        </div>
                        <div class='lined-info'>
                          <span class='meta-data'>
                            <i class='fa fa-clock-o'></i> Sunday, <span class='event-time'>3:00 pm - 8:00 pm</span>{' '}
                            <span class='label label-primary'>Upcoming</span>
                          </span>
                        </div>
                        <div class='lined-info event-location'>
                          <span class='meta-data'>
                            <i class='fa fa-map-marker'></i>{' '}
                            <span class='event-location-address'>55 Warren Street, New York, NY 10007, USA</span>
                          </span>
                        </div>{' '}
                      </div>
                      <div class='event-list-item-actions'>
                        {' '}
                        <a
                          id='register-2763|1587308401'
                          href='#'
                          class='btn btn-default btn-transparent event-tickets event-register-button'
                        >
                          Register
                        </a>
                        <ul class='action-buttons'>
                          {' '}
                          <li title='Share Event'>
                            <a
                              href='#'
                              data-trigger='focus'
                              data-placement='top'
                              data-content=''
                              data-toggle='popover'
                              data-original-title='Share Event'
                              class='event-share-link'
                            >
                              <i class='icon-share'></i>
                            </a>
                          </li>{' '}
                          <li title='Get directions' class='hidden-xs'>
                            <a href='#' class='cover-overlay-trigger event-direction-link'>
                              <i class='icon-compass'></i>
                            </a>
                          </li>{' '}
                          <li title='Contact event manager'>
                            <a id='contact-2763|1587308401' href='#' data-toggle='modal' data-target='#Econtact' class='event-contact-link'>
                              <i class='icon-mail'></i>
                            </a>
                          </li>{' '}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class='element-block events-listing'>
                    <div class='events-listing-content'>
                      <div class='event-list-item-date'>
                        <span class='event-date'>
                          <span class='event-day'>19</span>
                          <span class='event-month'>Apr, 20</span>
                        </span>
                      </div>
                      <div class='event-list-item-info'>
                        <div class='lined-info'>
                          <h4>
                            <a href='index33fe.html?event=sunday-meet-up&amp;event_date=2020-04-19' class='event-title'>
                              Sunday Meet Up
                            </a>
                          </h4>
                        </div>
                        <div class='lined-info'>
                          <span class='meta-data'>
                            <i class='fa fa-clock-o'></i> Sunday, <span class='event-time'>3:00 pm - 8:00 pm</span>{' '}
                            <span class='label label-primary'>Upcoming</span>
                          </span>
                        </div>
                        <div class='lined-info event-location'>
                          <span class='meta-data'>
                            <i class='fa fa-map-marker'></i>{' '}
                            <span class='event-location-address'>55 Warren Street, New York, NY 10007, USA</span>
                          </span>
                        </div>{' '}
                      </div>
                      <div class='event-list-item-actions'>
                        {' '}
                        <a
                          id='register-2763|1587308401'
                          href='#'
                          class='btn btn-default btn-transparent event-tickets event-register-button'
                        >
                          Register
                        </a>
                        <ul class='action-buttons'>
                          {' '}
                          <li title='Share Event'>
                            <a
                              href='#'
                              data-trigger='focus'
                              data-placement='top'
                              data-content=''
                              data-toggle='popover'
                              data-original-title='Share Event'
                              class='event-share-link'
                            >
                              <i class='icon-share'></i>
                            </a>
                          </li>{' '}
                          <li title='Get directions' class='hidden-xs'>
                            <a href='#' class='cover-overlay-trigger event-direction-link'>
                              <i class='icon-compass'></i>
                            </a>
                          </li>{' '}
                          <li title='Contact event manager'>
                            <a id='contact-2763|1587308401' href='#' data-toggle='modal' data-target='#Econtact' class='event-contact-link'>
                              <i class='icon-mail'></i>
                            </a>
                          </li>{' '}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class='main' role='main'>
          <div id='content' class='content full'>
            <div class='container'>
              <hr class='fw'></hr>
              <div class='row'>
                <div class='col-md-8'>
                  <h3>From our blog</h3>
                  <hr class='sm'></hr>
                  <div class='row'>
                    <div class='col-md-6'>
                      <div class='very-latest-post format-standard'>
                        <div class='title-row'>
                          <a href='blog-post.html#comments' class='comments-go' title='10 comments'>
                            <i class='icon-dialogue-text'></i>
                          </a>
                          <a href='2018/01/24/standard-post-format/index.html#respond' class='comments-go'>
                            <i class='icon-dialogue-text'></i>
                          </a>{' '}
                          <h4>Very Latest</h4>
                        </div>
                        <img
                          src='wp-content/uploads/sites/13/2015/01/slide1-800x500.jpg'
                          class='attachment-800x500 size-800x500 wp-post-image'
                          alt=''
                          srcset='https://demo.imithemes.com/adore-church-wp/wp-content/uploads/sites/13/2015/01/slide1-800x500.jpg 800w, https://demo.imithemes.com/adore-church-wp/wp-content/uploads/sites/13/2015/01/slide1-330x206.jpg 330w, https://demo.imithemes.com/adore-church-wp/wp-content/uploads/sites/13/2015/01/slide1-200x125.jpg 200w'
                          sizes='(max-width: 800px) 100vw, 800px'
                        />{' '}
                        <h3 class='post-title'>
                          <a href='2018/01/24/standard-post-format/index.html'>Standard Post Format</a>
                        </h3>
                        <div class='meta-data'>
                          by <a href='author/imicreation/index.html'>Admin</a> on January 24, 2018 in{' '}
                          <a href='category/featured/index.html'>Featured</a>, <a href='category/general/index.html'>General</a>,{' '}
                          <a href='category/uncategorized/index.html'>Uncategorized</a>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Donec facilisis
                          fermentum sem, ac viverra ante luctus vel. Donec vel mauris quam.
                        </p>{' '}
                        <p>
                          <a href='2018/01/24/standard-post-format/index.html' class='basic-link'>
                            Continue reading <i class='fa fa-angle-right'></i>
                          </a>
                        </p>
                      </div>
                    </div>
                    <div class='col-md-6'>
                      <ul class='blog-classic-listing'>
                        <li class='format-standard'>
                          <div class='row'>
                            <div class='col-md-12'>
                              <a href='2018/01/24/self-hosted-audio-post-example/index.html'>
                                <strong class='post-title'>Self hosted audio post example</strong>
                              </a>
                              <div class='meta-data'>
                                by <a href='author/imicreation/index.html'>Admin</a> on January 24, 2018 in{' '}
                                <a href='category/events/index.html'>Events</a>, <a href='category/featured/index.html'>Featured</a>,{' '}
                                <a href='category/general/index.html'>General</a>,{' '}
                                <a href='category/uncategorized/index.html'>Uncategorized</a>, <a href='category/unity/index.html'>Unity</a>
                                , <a href='category/videos/index.html'>Videos</a>
                              </div>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus.</p>{' '}
                              <p>
                                <a href='2018/01/24/self-hosted-audio-post-example/index.html' class='basic-link'>
                                  Continue reading <i class='fa fa-angle-right'></i>
                                </a>
                              </p>
                            </div>
                          </div>
                        </li>
                        <li class='format-standard'>
                          <div class='row'>
                            <div class='col-md-12'>
                              <a href='2018/01/24/gallery-post-format/index.html'>
                                <strong class='post-title'>Gallery Post Format</strong>
                              </a>
                              <div class='meta-data'>
                                by <a href='author/imicreation/index.html'>Admin</a> on January 24, 2018 in{' '}
                                <a href='category/events/index.html'>Events</a>, <a href='category/featured/index.html'>Featured</a>,{' '}
                                <a href='category/general/index.html'>General</a>,{' '}
                                <a href='category/uncategorized/index.html'>Uncategorized</a>, <a href='category/unity/index.html'>Unity</a>
                                , <a href='category/videos/index.html'>Videos</a>
                              </div>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus.</p>{' '}
                              <p>
                                <a href='2018/01/24/gallery-post-format/index.html' class='basic-link'>
                                  Continue reading <i class='fa fa-angle-right'></i>
                                </a>
                              </p>
                            </div>
                          </div>
                        </li>
                        <li class='format-standard'>
                          <div class='row'>
                            <div class='col-md-12'>
                              <a href='2018/01/24/soundcloud-audio-post/index.html'>
                                <strong class='post-title'>Soundcloud audio post</strong>
                              </a>
                              <div class='meta-data'>
                                by <a href='author/imicreation/index.html'>Admin</a> on January 24, 2018 in{' '}
                                <a href='category/featured/index.html'>Featured</a>, <a href='category/general/index.html'>General</a>,{' '}
                                <a href='category/uncategorized/index.html'>Uncategorized</a>
                              </div>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus.</p>{' '}
                              <p>
                                <a href='2018/01/24/soundcloud-audio-post/index.html' class='basic-link'>
                                  Continue reading <i class='fa fa-angle-right'></i>
                                </a>
                              </p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class='col-md-4'>
                  <div id='sermon_list-1' class='widget sidebar-widget widget_sermon_list'>
                    <h3 class='widgettitle'></h3>
                    <ul>
                      <li class='most-recent-sermon clearfix'>
                        <h3>Recent Sermons</h3>
                        <hr class='sm'></hr>
                        <div class='latest-sermon-video fw-video format-standard'>
                          <iframe
                            src='http://player.vimeo.com/video/37540860?title=0&amp;byline=0&amp;autoplay=0&amp;portrait=0'
                            style={{ width: '100%' }}
                            height='281'
                            allowfullscreen
                          ></iframe>
                        </div>
                        <div class='latest-sermon-content'>
                          <h4>
                            <a href='index40c6.html?sermon=the-difference-maker'>The Difference Maker</a>
                          </h4>
                          <div class='meta-data'>
                            by <strong>Brandon Dean</strong> on March 16, 2015
                          </div>
                          <p>Nulla consequat massa quis enim.Donec pede justo, fringilla</p>
                        </div>
                        <div class='sermon-links'>
                          <ul class='action-buttons'>
                            <li>
                              <a
                                href='index40c6.html?sermon=the-difference-maker'
                                data-toggle='tooltip'
                                data-placement='right'
                                data-original-title='Watch Video'
                              >
                                <i class='icon-video-cam'></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href='index40c6.html?sermon=the-difference-maker'
                                data-toggle='tooltip'
                                data-placement='right'
                                data-original-title='Listen Audio'
                              >
                                <i class='icon-headphones'></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href='wp-content/themes/AdoreChurch/download/Miaow-02-Hidden73b2.mp3?file=https://demo.imithemes.com/adore-church-wp/wp-content/uploads/sites/13/2015/01/Miaow-02-Hidden.mp3'
                                data-toggle='tooltip'
                                data-placement='right'
                                data-original-title='Download Audio'
                              >
                                <i class='icon-cloud-download'></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href='wp-content/themes/AdoreChurch/download/dummy_pdf82c8.pdf?file=https://demo.imithemes.com/adore-church-wp/wp-content/uploads/sites/13/2015/01/dummy_pdf.pdf'
                                data-toggle='tooltip'
                                data-placement='right'
                                data-original-title='Download PDF'
                              >
                                <i class='icon-download-folder'></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a href='index8b24.html?sermon=3-areas-all-of-us-struggle-to-trust-god-with'>
                          <strong class='post-title'>3 Areas All of Us Struggle to Trust God With</strong>
                        </a>
                        <div class='meta-data'>
                          by <strong>Elizabeth Hart</strong> on January 24, 2018
                        </div>
                      </li>
                      <li>
                        <a href='indexd8af.html?sermon=its-time-for-a-comeback'>
                          <strong class='post-title'>It’s Time for a Comeback</strong>
                        </a>
                        <div class='meta-data'>
                          by <strong>Kyleigh Lam</strong> on January 24, 2018
                        </div>
                      </li>
                    </ul>
                  </div>{' '}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class='gallery-updates cols5 clearfix'>
          <ul>
            <li class='format-link'>
              <div class='grid-item-inner'>
                <a href='http://www.imithemes.com/' target='_blank' class='media-box'>
                  <img
                    src='wp-content/uploads/sites/13/2015/01/gallery_img5-400x400.jpg'
                    class='attachment-400x400 size-400x400 wp-post-image'
                    alt=''
                    srcset='https://demo.imithemes.com/adore-church-wp/wp-content/uploads/sites/13/2015/01/gallery_img5-400x400.jpg 400w, https://demo.imithemes.com/adore-church-wp/wp-content/uploads/sites/13/2015/01/gallery_img5-150x150.jpg 150w, https://demo.imithemes.com/adore-church-wp/wp-content/uploads/sites/13/2015/01/gallery_img5-300x300.jpg 300w, https://demo.imithemes.com/adore-church-wp/wp-content/uploads/sites/13/2015/01/gallery_img5-100x100.jpg 100w, https://demo.imithemes.com/adore-church-wp/wp-content/uploads/sites/13/2015/01/gallery_img5-210x210.jpg 210w, https://demo.imithemes.com/adore-church-wp/wp-content/uploads/sites/13/2015/01/gallery_img5-180x180.jpg 180w, https://demo.imithemes.com/adore-church-wp/wp-content/uploads/sites/13/2015/01/gallery_img5.jpg 600w'
                    sizes='(max-width: 400px) 100vw, 400px'
                  />
                </a>
              </div>
            </li>
            <li class='format-link'>
              <div class='grid-item-inner'>
                <a href='http://www.imithemes.com/' target='_blank' class='media-box'>
                  <img
                    src='wp-content/uploads/sites/13/2015/01/gallery_img5-400x400.jpg'
                    class='attachment-400x400 size-400x400 wp-post-image'
                    alt=''
                    srcset='https://demo.imithemes.com/adore-church-wp/wp-content/uploads/sites/13/2015/01/gallery_img5-400x400.jpg 400w, https://demo.imithemes.com/adore-church-wp/wp-content/uploads/sites/13/2015/01/gallery_img5-150x150.jpg 150w, https://demo.imithemes.com/adore-church-wp/wp-content/uploads/sites/13/2015/01/gallery_img5-300x300.jpg 300w, https://demo.imithemes.com/adore-church-wp/wp-content/uploads/sites/13/2015/01/gallery_img5-100x100.jpg 100w, https://demo.imithemes.com/adore-church-wp/wp-content/uploads/sites/13/2015/01/gallery_img5-210x210.jpg 210w, https://demo.imithemes.com/adore-church-wp/wp-content/uploads/sites/13/2015/01/gallery_img5-180x180.jpg 180w, https://demo.imithemes.com/adore-church-wp/wp-content/uploads/sites/13/2015/01/gallery_img5.jpg 600w'
                    sizes='(max-width: 400px) 100vw, 400px'
                  />
                </a>
              </div>
            </li>
            <li class='format-link'>
              <div class='grid-item-inner'>
                <a href='http://www.imithemes.com/' target='_blank' class='media-box'>
                  <img
                    src='wp-content/uploads/sites/13/2015/01/gallery_img5-400x400.jpg'
                    class='attachment-400x400 size-400x400 wp-post-image'
                    alt=''
                    srcset='https://demo.imithemes.com/adore-church-wp/wp-content/uploads/sites/13/2015/01/gallery_img5-400x400.jpg 400w, https://demo.imithemes.com/adore-church-wp/wp-content/uploads/sites/13/2015/01/gallery_img5-150x150.jpg 150w, https://demo.imithemes.com/adore-church-wp/wp-content/uploads/sites/13/2015/01/gallery_img5-300x300.jpg 300w, https://demo.imithemes.com/adore-church-wp/wp-content/uploads/sites/13/2015/01/gallery_img5-100x100.jpg 100w, https://demo.imithemes.com/adore-church-wp/wp-content/uploads/sites/13/2015/01/gallery_img5-210x210.jpg 210w, https://demo.imithemes.com/adore-church-wp/wp-content/uploads/sites/13/2015/01/gallery_img5-180x180.jpg 180w, https://demo.imithemes.com/adore-church-wp/wp-content/uploads/sites/13/2015/01/gallery_img5.jpg 600w'
                    sizes='(max-width: 400px) 100vw, 400px'
                  />
                </a>
              </div>
            </li>
            <li class='format-link'>
              <div class='grid-item-inner'>
                <a href='http://www.imithemes.com/' target='_blank' class='media-box'>
                  <img
                    src='wp-content/uploads/sites/13/2015/01/gallery_img5-400x400.jpg'
                    class='attachment-400x400 size-400x400 wp-post-image'
                    alt=''
                    srcset='https://demo.imithemes.com/adore-church-wp/wp-content/uploads/sites/13/2015/01/gallery_img5-400x400.jpg 400w, https://demo.imithemes.com/adore-church-wp/wp-content/uploads/sites/13/2015/01/gallery_img5-150x150.jpg 150w, https://demo.imithemes.com/adore-church-wp/wp-content/uploads/sites/13/2015/01/gallery_img5-300x300.jpg 300w, https://demo.imithemes.com/adore-church-wp/wp-content/uploads/sites/13/2015/01/gallery_img5-100x100.jpg 100w, https://demo.imithemes.com/adore-church-wp/wp-content/uploads/sites/13/2015/01/gallery_img5-210x210.jpg 210w, https://demo.imithemes.com/adore-church-wp/wp-content/uploads/sites/13/2015/01/gallery_img5-180x180.jpg 180w, https://demo.imithemes.com/adore-church-wp/wp-content/uploads/sites/13/2015/01/gallery_img5.jpg 600w'
                    sizes='(max-width: 400px) 100vw, 400px'
                  />
                </a>
              </div>
            </li>
            <li class='format-link'>
              <div class='grid-item-inner'>
                <a href='http://www.imithemes.com/' target='_blank' class='media-box'>
                  <img
                    src='wp-content/uploads/sites/13/2015/01/gallery_img5-400x400.jpg'
                    class='attachment-400x400 size-400x400 wp-post-image'
                    alt=''
                    srcset='https://demo.imithemes.com/adore-church-wp/wp-content/uploads/sites/13/2015/01/gallery_img5-400x400.jpg 400w, https://demo.imithemes.com/adore-church-wp/wp-content/uploads/sites/13/2015/01/gallery_img5-150x150.jpg 150w, https://demo.imithemes.com/adore-church-wp/wp-content/uploads/sites/13/2015/01/gallery_img5-300x300.jpg 300w, https://demo.imithemes.com/adore-church-wp/wp-content/uploads/sites/13/2015/01/gallery_img5-100x100.jpg 100w, https://demo.imithemes.com/adore-church-wp/wp-content/uploads/sites/13/2015/01/gallery_img5-210x210.jpg 210w, https://demo.imithemes.com/adore-church-wp/wp-content/uploads/sites/13/2015/01/gallery_img5-180x180.jpg 180w, https://demo.imithemes.com/adore-church-wp/wp-content/uploads/sites/13/2015/01/gallery_img5.jpg 600w'
                    sizes='(max-width: 400px) 100vw, 400px'
                  />
                </a>
              </div>
            </li>
          </ul>
          <div class='gallery-updates-overlay'>
            <div class='container'>
              <i class='icon-multiple-image'></i>
              <h2>Updates from our gallery</h2>
            </div>
          </div>
        </div>
        <footer class='site-footer'>
          <div class='container'>
            <div class='site-footer-top'>
              <div class='row'>
                <div class='col-md-4 col-sm-4 widget footer-widget widget_text'>
                  <h4 class='widgettitle'>About Our Church</h4>{' '}
                  <div class='textwidget'>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Donec facilisis fermentum
                      sem, ac viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Donec
                      facilisis fermentum sem, ac viverra.
                    </p>
                  </div>
                </div>
                <div class='col-md-4 col-sm-4 widget footer-widget widget_twitter_feeds'>
                  <h4 class='widgettitle'>Twitter Feeds</h4>
                  <ul>
                    <li>
                      <i class='fa fa-twitter'></i> RT <a href='http://www.twitter.com/pulte'>@pulte</a>: I’m going give $3,000 to someone
                      random who retweets this tweet in the next 72 hours (must be following me so I can dm you. Will…
                      <span class='date'>Mar. 26, 2020</span>
                    </li>
                    <li>
                      <i class='fa fa-twitter'></i> RT <a href='http://www.twitter.com/MaryZai'>@MaryZai</a>: Ever since I started working,
                      one thing becomes clearer each passing day: It’s not money I’m after. It’s the freedom to live…
                      <span class='date'>Mar. 14, 2020</span>
                    </li>
                  </ul>
                </div>
                <div class='col-md-4 col-sm-4 widget footer-widget widget_newsletter'>
                  <h4 class='widgettitle'>News Subscription</h4>
                  <p>Subscribe to our newsletter in order to receive the latest new & articles. We promise we won't spam your inbox!</p>
                  <form method='post' action='#'>
                    <input type='email' name='newsletter_email' id='email-nl' placeholder='Enter your email' class='form-control' />
                    <input type='submit' name='newsletter_submit' class='btn btn-primary btn-block btn-lg' value='Subscribe' />
                  </form>
                </div>
              </div>
              <div class='quick-info'>
                <div class='row'>
                  <div class='col-md-9'>
                    <div class='col-md-4 '>
                      <h4 class=''>
                        <i class='fa fa-clock-o'></i> Service Times
                      </h4>
                      <p class=''> Sundays @ 10:00 AM - Starting October 1</p>
                    </div>
                    <div class='col-md-4 '>
                      <h4 class=''>
                        <i class='fa fa-map-marker'></i> Our Location
                      </h4>
                      <p class=''>777, Path to God</p>
                      <p class=''>United States of America</p>
                    </div>
                    <div class='col-md-4 '>
                      <h4 class=''>
                        <i class='fa fa-envelope'></i> Contact Info
                      </h4>
                      <p class=''>11 - 00 - 653240 email@adorechurch.com</p>
                    </div>{' '}
                  </div>
                  <div class='col-md-3'>
                    <h4>
                      <i class='fa fa-clock-o'></i> Socialize with us
                    </h4>
                    <ul class='social-icons-colored inversed'>
                      <li class='facebook'>
                        <a href='http://www.facebook.com/' target='_blank'>
                          <i class='fa fa-facebook'></i>
                        </a>
                      </li>
                      <li class='twitter'>
                        <a href='http://twitter.com/' target='_blank'>
                          <i class='fa fa-twitter'></i>
                        </a>
                      </li>
                      <li class='google-plus'>
                        <a href='http://plus.google.com/' target='_blank'>
                          <i class='fa fa-google-plus'></i>
                        </a>
                      </li>
                      <li class='vimeo-square'>
                        <a href='#' target='_blank'>
                          <i class='fa fa-vimeo-square'></i>
                        </a>
                      </li>{' '}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class='site-footer-bottom'>
              <div class='row'>
                <div class='col-md-6 col-sm-6 copyrights-coll'>© 2019 Adore Church. All Rights Reserved </div>
                <div class='col-md-6 col-sm-6 copyrights-colr'>
                  <nav class='footer-nav' role='navigation'>
                    <ul id='menu-footer-menu' class=''>
                      <li
                        id='menu-item-528'
                        class='menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-28 current_page_item menu-item-528'
                      >
                        <a href='index.html' aria-current='page'>
                          Home
                        </a>
                      </li>
                      <li id='menu-item-529' class='menu-item menu-item-type-post_type menu-item-object-page menu-item-529'>
                        <a href='contact/index.html'>Contact</a>
                      </li>
                      <li id='menu-item-530' class='menu-item menu-item-type-post_type menu-item-object-page menu-item-530'>
                        <a href='im-new-here/index.html'>New Here</a>
                      </li>
                    </ul>{' '}
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
