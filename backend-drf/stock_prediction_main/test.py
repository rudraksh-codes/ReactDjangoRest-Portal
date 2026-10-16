import redis
r = redis.Redis(host='localhost', port=6379, decode_responses=True)

a=r.set('me', 'rudra')
# True
b=r.get('me')
# bar

print(a)
print(b)