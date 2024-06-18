echo "Pulling git repository"
git pull
echo "Restarting web server"
pm2 restart 0
echo "Update complete!"

