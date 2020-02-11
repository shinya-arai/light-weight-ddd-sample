import React from 'react'
import { Link } from 'react-router-dom'

const Input = () => {
  return (
    <div>
      口座番号入力
      <form>
        <input /> <br />
      </form>
      <Link to="/register">口座登録</Link>
    </div>
  )
}

export default Input
