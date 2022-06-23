import React from 'react'
import { useRouter } from 'next/router';
const Docs = () => {
    const router = useRouter()
    const { params = [] } = router.query
    console.log(params)

    if (params.length === 4) {
        return <h3>{`viewing docs for ${params[0]} ${params[1]} of ${params[2]} ${params[3]}`}</h3>
    } else if (params.length === 2) {
        return <h3>{`viewing docs for ${params[0]} ${params[1]}`}</h3>
    } else {
        return <h3>docs page</h3>
    }
}

export default Docs
