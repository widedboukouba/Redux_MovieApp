import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
const Abouut = () => {
  return (
    <div style={{marginTop:'10px',  background:'rgb(19, 14, 24)'}}>
      

        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wallpaperaccess.com/full/1512324.jpg"
     
          alt="First slide"
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://variety.com/wp-content/uploads/2021/12/Worst-Films-of-2021-Venom-Music-Benedetta.jpg?w=1000"
          alt="Second slide"
        />

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/summer-movies-1587392939.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://filmfare.wwmindia.com/content/2021/aug/hollywoodmoviesyoucantmiss111630327817.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <Navbar bg="light" expand="lg" >
      <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"style={{fontSize:'20px', color:'#35a5af'}}>Home</Nav.Link>
            <Nav.Link href="#link"style={{fontSize:'20px', color:'#35a5af'}}>Link</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   


   
    <div class="wrapper">

<h2><strong>Movies<span>( 4 )</span></strong></h2>

<div class="cards">

  <figure class="card">

    <img src="https://stanforddaily.com/wp-content/uploads/2019/08/reviews.png" />

    <figcaption>Dota 2</figcaption>

  </figure>
  <figure class="card">

    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ_wRO26jSaS_BBnwvSMGw5PkQhQ92cK48zXfl5U3GLEcqUoy1Gc35dyGiyLnb3V_CsGo&usqp=CAU" />

    <figcaption>Dota 2</figcaption>

  </figure>
  <figure class="card">

    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR67hKRcPdNGr_Ys6x5W6KR0-x9OdeIsylkI9wEoWFwmdJ-NKrze29oeBk2TMaLFgnjGIc&usqp=CAU" />

    <figcaption>Dota 2</figcaption>

  </figure>

  <figure class="card">

    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9-q6xA4eVEj8wMfL4-1ht3D_XzSOKhqKJOZ2GMqzyjAFhFkmcAxGDjLWh1SO0id2mzGQ&usqp=CAU" />

    <figcaption>Stick Fight</figcaption>

  </figure>

  <figure class="card">

    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb9EbUD_M47_6od-vMvtLetbPUWipK5IsEJqheW6wMNLGu-Ngow6q1lqUOYqUe1U00i7A&usqp=CAU" />

    <figcaption>Minion Masters</figcaption>

  </figure>

  <figure class="card">

    <img src="https://cor-cdn-static.bibliocommons.com/list_jacket_covers/live/1823343449.png" />

    <figcaption>KoseBoz!</figcaption>

  </figure>

</div>

<h2><strong>What's new?</strong></h2>

<div class="news">

  <figure class="article">

    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSih-XfkvBUZ3PifV_VCEvvYpAbfiXRt_7PlN32qCJJE46pE4OqjmQudgXY8LRW5DxmJgU&usqp=CAU" />

    <figcaption>

      <h3>New Item</h3>

      <p>

        In today’s update, two heads are better than one, and three heads are better than that, as the all-new Flockheart’s Gamble Arcana item for Ogre Magi makes its grand debut.

      </p>

    </figcaption>

  </figure>
  

  <figure class="article">

    <img src="data:image/jpeg;base64,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" />

    <figcaption>

      <h3>Update</h3>

      <p>

        Just in time for Lunar New Year and the Rat’s time in the cyclical place of honor, the Treasure of Unbound Majesty is now available.

      </p>

    </figcaption>

  </figure>

</div>


<div class="news">

  <figure class="article">

    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9IJn-tLGUEzcIavUDdBQyAaapHXK1-UIF2g&usqp=CAU" />

    <figcaption>



      <p>

        In today’s update, two heads are better than one, and three heads are better than that, as the all-new Flockheart’s Gamble Arcana item for Ogre Magi makes its grand debut.

      </p>

    </figcaption>

  </figure>
  

  <figure class="article">

    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiBRumYPK9LLgi1LxyxClBoKLddC8Y62M52g&usqp=CAU" />

    <figcaption>

      <h3>Update</h3>

      <p>

        Just in time for Lunar New Year and the Rat’s time in the cyclical place of honor, the Treasure of Unbound Majesty is now available.

      </p>

    </figcaption>

  </figure>

</div>

</div>

    </div>
  )
}

export default Abouut