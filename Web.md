𝟲 𝗘𝘀𝘀𝗲𝗻𝘁𝗶𝗮𝗹 𝗔𝗣𝗜 𝗦𝘁𝘆𝗹𝗲𝘀 🔀

An API style is like a secret handshake 🤝 between two computers, helping them share and understand each other's messages. There are various methods of handshakes and each has its own way of sending and receiving information!

Here are the 6 most important API styles you need to know:

1️⃣ SOAP 🧼

An XML-based communication protocol with strict contracts. It's mostly used over HTTP(S) 🌐 and is popular in enterprise environments 🏢.

What Engineers need to know: As a software or DevOps engineer, understanding SOAP is crucial for working in enterprise environments, especially where legacy systems still exist.

2️⃣ REST API 🔄

An easy-to-understand, resource-focused API style. It uses standard HTTP methods 🌐 and often employs JSON for data.

What Engineers need to know: REST APIs are common, so mastery of their design and use is a key skill for developers and DevOps.

3️⃣ gRPC ⚙️

An API style emphasizing remote procedure calls (RPCs). It uses HTTP/2 for transport and Protocol Buffers for data serialization, making it ideal for efficient, low-latency microservices 🔬.

What Engineers need to know: Knowledge of gRPC can help in designing and maintaining high-performing, scalable microservices.

4️⃣ GraphQL 📊

A flexible query language for APIs allowing clients to request specific data. It was developed by Facebook and can combine data from multiple sources 🔄.

What Engineers need to know: Understanding GraphQL can help in creating efficient APIs that prevent over-fetching and under-fetching of data.

5️⃣ Websocket 🔌

A protocol for real-time, bidirectional communication 🔄. It maintains a long-lived connection and is great for web apps needing live updates 📲.

What Engineers need to know: Websockets are essential for applications requiring real-time data exchange, like chat applications or real-time analytics.

6️⃣ Webhook 🎣

A server-side, event-driven mechanism. It sends HTTP callbacks (usually POST requests) when specific events occur, perfect for real-time data updates or third-party service integration 🔗.

What Engineers need to know: Webhooks are crucial for setting up automated workflows and integrations, a common task in DevOps and software development.

To stay ahead of the curve, software and DevOps engineers need to understand these API styles, their benefits, and their use cases. This will allow them to design and implement efficient, scalable, and functional systems. 🚀💻


# WebSocket :

- WebSocket is a communication protocol that provides full-duplex communication channels over a single TCP connection.
- It allows for real-time, bidirectional communication between a client (typically a web browser) and a server.

1. Establishing a WebSocket Connection
    - To establish a WebSocket connection, the client sends an HTTP request to the server, requesting to upgrade the connection to the WebSocket protocol. The server responds with an HTTP 101 status code, indicating a successful upgrade.
   
2. WebSocket Handshake
    - During the handshake process, the client and server exchange headers to negotiate the WebSocket connection. The client sends a handshake request, including the Upgrade and Connection headers, and a unique Sec-WebSocket-Key header value. The server responds with a handshake response, including the Upgrade, Connection, and Sec-WebSocket-Accept headers.

3. WebSocket Data Transfer:
    - Once the WebSocket connection is established, both the client and server can send and receive messages to each other at any time without the need for a new HTTP request/response cycle. This bidirectional communication enables real-time data transfer and push notifications.

4. Sending and Receiving Messages:
    - WebSocket messages are framed, meaning they are divided into small chunks called frames. Each frame contains a payload, which can be text or binary data. The client and server can send messages by sending frames containing the appropriate payload. Messages can be of any length and are not limited by the size restrictions of HTTP.

5. Handling Events:
    - WebSocket provides various events to handle the connection lifecycle and incoming messages. For example, the open event is triggered when the connection is successfully established, the message event is triggered when a message is received, and the close event is triggered when the connection is closed.

6. Closing the WebSocket Connection:
    - To close the WebSocket connection, either the client or the server can send a close frame. This frame indicates the intention to close the connection. The other party can respond with a close frame to acknowledge the request, and both sides can perform necessary cleanup operations.

    

# WebRTC

    - A powerful browser API that enables real-time communication between web browsers or applications. It provides peer-to-peer audio, video, and data streaming directly between browsers without the need for intermediate servers.

- signaling servers
- STUN 
- TURN

1. Obtaining User Media::
    
    - WebRTC allows you to access the user's media devices, such as a webcam and microphone, using the getUserMedia API. This enables you to capture audio and video streams from the user's device.

2. Establishing a Connection:
    
    - WebRTC uses a signaling mechanism to establish a connection between peers. Signaling can be accomplished using different methods, such as WebSocket, XHR, or a dedicated signaling server. The signaling process involves exchanging session information, such as network addresses and supported media formats.

3. Creating Peer Connections:
    
    - Once the signaling process is complete, you can create a peer connection using the `RTCPeerConnection` API. The peer connection facilitates direct communication between peers and manages media streams, encryption, and network traversal.

4. Exchanging ICE Candidates:
    - ICE (Interactive Connectivity Establishment) is a technique used by WebRTC to establish a connection even when both peers are behind different types of NAT (Network Address Translation). During the ICE process, ICE candidates are exchanged between peers to determine the best connection path. These candidates include information about IP addresses, ports, and transport protocols.

5. Negotiating Session Description:
    - WebRTC uses Session Description Protocol (SDP) to negotiate the media capabilities and settings between peers. Each peer creates an SDP offer or answer, which contains information about supported codecs, media types, and network connectivity. This negotiation ensures that both peers agree on the media formats and settings.

6. Establishing Data Channels:
    - In addition to audio and video streaming, WebRTC supports data channels that enable peer-to-peer data transfer. Data channels are created within a peer connection and provide reliable, ordered, and bi-directional communication. They can be used to transfer any type of data, such as text messages or file transfers.

7. Handling Media Stream and Events:
    - WebRTC provides events and APIs to handle media streams, including capturing and displaying video and audio data. You can utilize HTML5 <video> and <audio> elements to display media streams in the browser.

8. Handling Media Stream and Events:
- WebRTC provides events and APIs to handle media streams, including capturing and displaying video and audio data. You can utilize HTML5 <video> and <audio> elements to display media streams in the browser.

- WebSocket provides a client-server computer communication protocol, whereas WebRTC offers a peer-to-peer protocol and communication capabilities for browsers and mobile apps. While WebSocket works only over TCP, WebRTC is primarily used over UDP (although it can work over TCP as well)


