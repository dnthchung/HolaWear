import express from 'express'

const app = express()

app.use(
  express.json({
    limit: '10mb',
  }),
)
app.use(express.urlencoded({ extended: true, limit: '10mb' }))
// app.use(cors());
// app.use(cookieParser());
// app.use(morgan("dev"));

app.get('/test-server', (req, res) => {
  res.send('Hello World')
})

export default app
