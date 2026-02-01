#!/bin/bash
set -euo pipefail

LANGFLOW_BIN="/home/raytan/application/langflow-onto/.venv/bin/langflow"
VENV_ACTIVATE="/home/raytan/application/langflow-onto/.venv/bin/activate"
ENV_FILE="/home/raytan/application/langflow-onto/.env"
LOG_FILE="/home/raytan/application/langflow-onto/langflow.log"
DO_NOT_TRACK=true
PORT=7860
PID_FILE="/tmp/langflow.pid"

usage() {
    echo "Usage: $0 {start|stop|restart}"
    exit 1
}

kill_langflow() {
    if [ -f "$PID_FILE" ]; then
        kill -TERM "$(cat "$PID_FILE")" >/dev/null 2>&1 || true
        rm -f "$PID_FILE"
    fi
    pkill -f "langflow run.*--port $PORT" || true
    echo "Langflow processes stopped."
}

start_langflow() {
    kill_langflow
    sleep 1

    nohup bash -c "
        source '$VENV_ACTIVATE' &&
	export DO_NOT_TRACK='$DO_NOT_TRACK' &&
        exec '$LANGFLOW_BIN' run \
            --host 127.0.0.1 \
            --port '$PORT' \
            --env-file '$ENV_FILE'
    " > "$LOG_FILE" 2>&1 &

    echo $! > "$PID_FILE"
    echo "Langflow started on port $PORT"
}

case "${1:-}" in
    start)   start_langflow ;;
    stop)    kill_langflow ;;
    restart) kill_langflow; sleep 2; start_langflow ;;
    *)       usage ;;
esac

