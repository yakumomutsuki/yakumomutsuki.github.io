import React from 'react'

class Error extends React.Component {
  componentDidMount () {
    console.log('comopnent did mount!!')

    // クライアントサイドのみで実行したい処理を実装
    const { pathname } = location
    const allowPathname = [
      '/',
      '/sample',
      '/sample/sample'
    ]

    if (allowPathname.includes(pathname)) {
      location.href = `/?originalPath=${pathname}`
    }
  }

  render () {
    return (
      <div>
                ...
      </div>
    )
  }
}

export default Error
