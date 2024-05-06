import React from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link } from 'react-router-dom'
import Thumbnail from '../images/blog22.jpg'

const PostDetail = () => {
  return (
    <section className="post-detail">
      <div className="container post-detail__container">
        <div className="post-detail__header">
          <PostAuthor/>
          <div className="post-detail__buttons">
            <Link to={`/posts/werwer/edit`} className='btn sm primary'>Edit</Link>
            <Link to={`/posts/werwer/delete`} className='btn sm danger'>delete</Link>
          </div>
        </div>
        <h1>This is the post title!</h1>
        <div className="post-detail__thumbnail">
          <img src={Thumbnail} alt="" />
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, impedit iusto. Veniam officia at minima ipsam, 
          expedita reprehenderit autem quia ducimus, nemo quis dolorem voluptatum, excepturi laborum nisi totam enim?
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, impedit iusto. Veniam officia at minima ipsam, 
          expedita reprehenderit autem quia ducimus, nemo quis dolorem voluptatum, excepturi laborum nisi totam enim?
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, impedit iusto. Veniam officia at minima ipsam, 
          expedita reprehenderit autem quia ducimus, nemo quis dolorem voluptatum, excepturi laborum nisi totam enim?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, impedit iusto. Veniam officia at minima ipsam, 
          expedita reprehenderit autem quia ducimus, nemo quis dolorem voluptatum, excepturi laborum nisi totam enim?
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, impedit iusto. Veniam officia at minima ipsam, 
          expedita reprehenderit autem quia ducimus, nemo quis dolorem voluptatum, excepturi laborum nisi totam enim?
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, impedit iusto. Veniam officia at minima ipsam, 
          expedita reprehenderit autem quia ducimus, nemo quis dolorem voluptatum, excepturi laborum nisi totam enim?
        </p>
        <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, impedit iusto. Veniam officia at minima ipsam, 
          expedita reprehenderit autem quia ducimus, nemo quis dolorem voluptatum, excepturi laborum nisi totam enim?
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, impedit iusto. Veniam officia at minima ipsam, 
          expedita reprehenderit autem quia ducimus, nemo quis dolorem voluptatum, excepturi laborum nisi totam enim?
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, impedit iusto. Veniam officia at minima ipsam, 
          expedita reprehenderit autem quia ducimus, nemo quis dolorem voluptatum, excepturi laborum nisi totam enim?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, dolorem? Ea facere nostrum iusto expedita ut
          omnis assumenda ipsum placeat. Odio repellendus doloribus voluptatum accusamus neque libero suscipit cumque aliquam?
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, perferendis aperiam quidem est rerum numquam,
          perspiciatis facilis temporibus quos, voluptas nesciunt? Tenetur, culpa est. Libero commodi explicabo officia
          dolore. Unde ratione dolor quis quos accusantium aliquid ipsa rerum quo vitae mollitia facilis reiciendis ex
          sit omnis dicta iste itaque corrupti laudantium, eum odit esse quam? Dolorem odit error optio molestias, 
          voluptatibus praesentium at eveniet libero quae excepturi incidunt repudiandae magnam quo nostrum modi 
          deleniti placeat ad amet necessitatibus similique tenetur cupiditate aut enim minima! Laborum reprehenderit
          sint, nostrum ipsam, officia vel pariatur magnam quia beatae consequatur aliquid dicta quidem, molestias
          dolores omnis temporibus voluptatem. Ab beatae hic facere vitae ut laboriosam a obcaecati fugiat cum 
          necessitatibus? Quia numquam dicta nam adipisci nobis consequatur perferendis eveniet cupiditate repudiandae
          obcaecati dolore eaque, deserunt maiores pariatur nihil! Ullam quisquam ratione officia ab corrupti 
          ex, ad at minima. Quisquam officiis magni repellat tempora nihil dolore nobis voluptatibus, voluptatum
          quis corrupti! Similique molestias dolor hic qui fugit? Sequi provident, repellendus minima ea ipsa 
          fuga nisi eum ratione illo vero accusamus similique pariatur sint quis facere nulla quibusdam maiores
          veniam voluptatem impedit eveniet reiciendis. Magni quisquam repellendus debitis tenetur ullam 
          asperiores repudiandae quia odit natus nisi?
        </p>
      </div>
    </section>
  )
}

export default PostDetail