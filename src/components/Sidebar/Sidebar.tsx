import React from 'react'
import AddAccount from '../AddAccount/AddAccount'
import './Sidebar.css'

function Sidebar() {
  const [accounts, setAccounts] = React.useState<string[]>([])
  const [account, setAccount] = React.useState('')

  function onChangeInput(event: React.FormEvent<HTMLInputElement>) {
    setAccount(event.currentTarget.value)
  }

  return (
    <div className="sidebar">
      <h1 className="brand">My Wealth</h1>
      <ul className="accounts-list">
        {accounts.map((acc) => (
          <li className="account">✔️ {acc}</li>
        ))}
      </ul>
      <input type="text" value={account} onChange={onChangeInput} />
      <AddAccount />
    </div>
  )
}

export default Sidebar
