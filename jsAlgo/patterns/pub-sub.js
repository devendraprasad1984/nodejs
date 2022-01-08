// publisher
// Subscriber
// unsubscribe
// Some place to store callbacks that are registered from subscribers.
//helps in async architecture, modules and subscribers and listeners


function pubsub() {
    const subscribers = {}

    function publish(eventName, data) {
        if (!Array.isArray(subscribers[eventName])) return
        subscribers[eventName].forEach(callback => {
            callback(data)
        })
    }

    function subscribe(eventName, callback) {
        if (!Array.isArray(subscribers[eventName])) subscribers[eventName] = []
        subscribers[eventName].push(callback)
        const index = subscribers[eventName].length - 1
        return {
            unsubscribe() {
                subscribers[eventName].split(index, 1)
            }
        }
    }

    return {publish, subscribe}
}


//---------------imple2
export const Modal = () => {
    const [content, setContent] = useState("no content");
    const [showModal, setShowModal] = useState(false);

    const setMessage = (message) => {
        setContent(message);
        setShowModal(true);
    };
    const clearMessage = () => {
        setContent("");
        setShowModal(false);
    };

    if (showModal) {
        return (
            <div>
                <h2>{content}</h2>
                <button onClick={clearMessage}>Close Modal</button>
            </div>
        );
    }
    return null;
};


const event = {
    list: new Map(),
    on(eventType, eventAction) {
        this.list.has(eventType) || this.list.set(eventType, []);
        if (this.list.get(eventType)) this.list.get(eventType).push(eventAction);
        return this; //allows chaining
    },

    emit(eventType, ...args) {
        this.list.get(eventType) &&
        this.list.get(eventType).forEach((cb) => {
            cb(...args);
        });
    }
};


export const Modal = () => {
    const [content, setContent] = useState("no content");
    const [showModal, setShowModal] = useState(false);

    const setMessage = (message) => {
        setContent(message);
        setShowModal(true);
    };
    const clearMessage = () => {
        setContent("");
        setShowModal(false);
    };

    useEffect(() => {
        event.on("showModal", setMessage).on("clearAllMessage", clearMessage);
    }, []);
    if (showModal) {
        return (
            <Container>
                <h2>{content}</h2>
                <button onClick={clearMessage}>Close Modal</button>
            </Container>
        );
    }
    return null;
}


export const ModalPublisher = {
    message: (content) => {
        event.emit("showModal", content);
    },
    clearAllMessage: () => {
        event.emit("clearAllMessage");
    }
};


function App() {
    return (
        <div className="App">
            <Modal showModal={true}/>
            <h1
                onClick={() => {
                    ModalPublisher.message("this is the content from App");
                }}
            >
                Hello CodeSandbox
            </h1>
            <h2>Start editing to see some magic happen!</h2>
        </div>
    );
}




