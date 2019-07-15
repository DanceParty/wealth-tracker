import React from 'react'
import PlaidLink from 'react-plaid-link'

function AddAccount() {
  function handleOnSuccess(token: string, metadata: any) {
    fetch('/api/v1/get_access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({publicToken: token}),
    })
      .then((response) => {
        return response.text()
      })
      .then((json) => {
        console.log(json)
      })
  }
  function handleOnExit() {
    console.log('exiting plaid...')
  }

  return (
    <PlaidLink
      clientName="My Wealth"
      env="sandbox"
      product={['auth', 'investments']}
      publicKey="4d6cddae6678080d359519e7f5f364"
      onExit={handleOnExit}
      onSuccess={handleOnSuccess}
    >
      Add Account
    </PlaidLink>
  )
}

export default AddAccount
