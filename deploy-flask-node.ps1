# deploy-flask-node.ps1 - Windows-safe version

# Set Docker environment to Minikube
& minikube -p minikube docker-env | Invoke-Expression

# Delete old deployments and services if they exist
kubectl delete deployment backend frontend --ignore-not-found
kubectl delete svc backend frontend --ignore-not-found

# Build Docker images
docker build -t backend-image ./backend
docker build -t frontend-image ./frontend

# Create deployments
kubectl create deployment backend --image=backend-image
kubectl create deployment frontend --image=frontend-image

# Expose services
kubectl expose deployment backend --type=NodePort --port=5000
kubectl expose deployment frontend --type=NodePort --port=3000

# Show pods and services status
kubectl get pods -o wide
kubectl get svc

Write-Host "`n[INFO] Deployment complete!" -ForegroundColor Cyan
