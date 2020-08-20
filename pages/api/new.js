import Twit from '../../lib/twit'

export default (req, res) => {
  const { tweet } = req.body

  if (!tweet) return res.status(400).json({ message: '!Tweet boş olamaz.' })

  Twit.post(
    'statuses/update',
    { status: ' Next.js Twitter Clone Test Tweet, ' + tweet },
    function (err, data, response) {
      if (err) {
        console.log(response)
        return res.status(400).json({ message: 'Ups! bir hata oldu.' })
      }

      res.status(200).json(JSON.stringify(data))
    }
  )
}
