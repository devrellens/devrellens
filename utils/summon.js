export async function callSummonApi(
    walletAddress,
    email,
    discordUserId,
    featureKey,
    tenantKey
) {
    const apiToken = '13070a6a49d0bf445cd800c184eca1eb17561701ff39410cdccaa03cebe3a61d';

    console.log('Sending', {
        featureKey,
        walletAddress,
        email,
        tenantKey
    })

    return fetch('https://sandbox-api.summon.xyz/v1/xps/job/integration/action', {
        method: 'POST',
        headers: {
            'Authentication': `bearer ${apiToken}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            featureKey,
            walletAddress,
            email,
            tenantKey
        })
    })
    .then(x => x.json())
    .then(x => console.log('Response', featureKey, x))
    .catch(err => console.warn(err) )
}

export async function summon_reward(
    walletAddress,
    featureKey,
    tenantKey
) {
    const apiToken = '13070a6a49d0bf445cd800c184eca1eb17561701ff39410cdccaa03cebe3a61d';

    console.log('Sending', {
        featureKey,
        walletAddress,
        tenantKey
    })

    return fetch('https://sandbox-api.summon.xyz/v1/xps/job/integration/action', {
        method: 'POST',
        headers: {
            'Authentication': `bearer ${apiToken}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            featureKey,
            walletAddress,
            tenantKey
        })
    })
    .then(x => x.json())
    .then(x => console.log('Response', featureKey, x))
    .catch(err => console.warn(err) )
}
