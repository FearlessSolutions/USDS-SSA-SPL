run_app:
	docker-compose up app

run_app_dev:
	docker-compose up storybook

down:
	docker-compose down

test_app:
	docker-compose up jest
	docker-compose up cypress
