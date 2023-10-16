import { io } from 'socket.io-client'
// export const socket=io("10.100.6.139: 8000",{reconnection:true,timeout:1000,autoConnect:false})
export const socket = io('http://localhost:8000', {
  reconnection: true,
  timeout: 1000,
  autoConnect: false,
})
