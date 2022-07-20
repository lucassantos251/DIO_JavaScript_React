import React, {useEffect, useState, memo} from 'react'

const areEqual = (prevProps, nextProps) =>{
  return prevProps.loading === nextProps.loading
}

function Twitter(props) {  
  const {loading} = props
  const [tweet, setTweet] = useState('Title')

  //componentDidMount
  useEffect(() => {
    const {posts, loading} = props
    console.log('component did mount', posts)
    console.log('component did mount', loading)
  }, [])

  //componentDidUpdate
  useEffect(() => {
    console.log('component did update')
  }, [loading])

  //componentWillUnmount
  useEffect(() => {
    return() => {
      console.log('component will unmount')
    }
  }, [])  
  
  /*componentDidUpdate = (prevProps) => {
    const {loading} = props
    if(props.loading !== prevProps.loading){
      console.log('component did update: loading', loading)
    }
  }
  componentWillUnmount = () => {
    console.log('component will unmount: fui removido')
  }
  shouldComponentUpdate = (nextProps, nextState) => {
    return state.tweet !== nextState.tweet
  }
  tweet = () => {
    setState({
      tweet:true
    })
  }*/

  const handleTweet = () => {
    setTweet('Tweet Atualizado')
  }

  console.log('Tweet atualizado: ', tweet)
  return (
    <div>
      Twitter
      <button onClick={handleTweet}>Re-Render</button>
    </div>
  )
}
export default memo(Twitter, areEqual)