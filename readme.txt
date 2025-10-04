# Flask-Node Kubernetes Deployment

## Deployment Steps:
1. Build images:
   - docker build -t backend-image ./backend
   - docker build -t frontend-image ./frontend

2. Apply k8s manifests:
   - kubectl apply -f k8s-deployments.yaml

3. Verify:
   - kubectl get pods -o wide
   - kubectl get svc
   - minikube service backend --url
   - minikube service frontend --url
