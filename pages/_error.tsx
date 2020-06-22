import React from 'react'

class Error extends React.Component {
  // @Note componentDidMountでは、クライアントサイドのみで実行したい処理を実装する
  componentDidMount () {
    const { pathname } = location
    const allowedPathNames = [
      '/',
      '/sample',
      '/sample/sample'
    ]

    if (allowedPathNames.includes(pathname)) {
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
