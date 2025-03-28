import { HttpInterceptorFn } from '@angular/common/http';

export const requestInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Request Interceptor - Original Request:', req);

  const modifiedReq = req.clone({
    setHeaders: {
      Authorization: 'Bearer 1287eruwehjdsfj',
      'Content-Type': 'application/json',
    },
  });

  console.log('Request Interceptor - Modified Request:', modifiedReq);
  if (req.method === 'POST') {
    return next(modifiedReq);
  }
  return next(req); 
};
