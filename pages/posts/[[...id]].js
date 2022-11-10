import { useRouter } from 'next/router'
import React from 'react'

const Slug = () => {
    const router = useRouter();
    console.log({router});
  return (
      <div>
          Post: {router.query.id}
    </div>
  )
}

export default Slug