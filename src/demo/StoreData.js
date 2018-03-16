const store = {
  bannerUrl:
    'https://res.cloudinary.com/teepublic/image/private/s--EIVk_IMG--/ar_10:3,c_fill,h_300,w_1000/d_misc:cover-photo.jpg,f_jpg,q_90/v1/development/stores/141840/banner.jpg',
  name: 'marcelo',
  id: 141840,
  _embedded: {
    designs: [
      {
        title: 'Central Park',
        imageUrl:
          'https://res.cloudinary.com/teepublic/image/private/s--6VY-4xIC--/t_Preview/b_rgb:ffffff,c_limit,f_jpg,h_313,q_90,w_313/v1520285396/development/designs/2321277_0.jpg',
        slug: '2321277-central-park',
        id: 2321277,
        description: 'Central park in winter.',
        _links: {
          self: {
            href: 'http://api.teepublic-dev.com:5000/v1/designs/2321277'
          }
        },
        _embedded: {
          products: [
            {
              type: 'crewneck-sweatshirt',
              options: [
                {
                  name: 'Gender'
                },
                {
                  name: 'Style'
                },
                {
                  name: 'Size'
                },
                {
                  name: 'Color'
                }
              ],
              _embedded: {
                defaultSku: {
                  images: [
                    {
                      type: 'mockup',
                      url:
                        'https://res.cloudinary.com/teepublic/image/private/s--B9LHEi34--/t_Resized Artwork/c_crop,x_10,y_10/c_fit,w_409/c_crop,g_north_west,h_544,w_409,x_0,y_0/g_north_west,u_upload:v1446840592:production:blanks:y7jxq9bohzhad5bkpchb,x_-428,y_-347/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1520285396/development/designs/2321277_0.jpg'
                    },
                    {
                      type: 'preview',
                      url:
                        'https://res.cloudinary.com/teepublic/image/private/s--Vpp2fpMO--/t_Preview/b_rgb:ffffff,c_limit,f_jpg,h_630,q_90,w_630/v1520285396/development/designs/2321277_0.jpg'
                    }
                  ],
                  productOptions: [
                    {
                      value: 'Male',
                      name: 'Gender'
                    },
                    {
                      value: 'Crewneck Sweatshirt',
                      name: 'Style'
                    },
                    {
                      value: 'S',
                      name: 'Size'
                    },
                    {
                      value: 'White',
                      name: 'Color'
                    }
                  ],
                  productType: 'crewneck-sweatshirt',
                  description:
                    'Ringspun Fleece 80% cotton 20% Poly. Pre-shrunk. 9 oz. Super warm and cozy with a twill neck to prevent stretching.',
                  id: 35,
                  price: '38.0'
                }
              }
            },
            {
              type: 't-shirt',
              options: [
                {
                  name: 'Gender'
                },
                {
                  name: 'Style'
                },
                {
                  name: 'Size'
                },
                {
                  name: 'Color'
                }
              ],
              _embedded: {
                defaultSku: {
                  images: [
                    {
                      url:
                        'https://res.cloudinary.com/teepublic/image/private/s--oEOz4mlg--/t_Resized Artwork/c_crop,x_10,y_10/c_fit,w_470/c_crop,g_north_west,h_626,w_470,x_0,y_0/g_north_west,u_upload:v1462829024:production:blanks:a59x1cgomgu5lprfjlmi,x_-395,y_-325/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1520285396/development/designs/2321277_0.jpg',
                      type: 'mockup'
                    },
                    {
                      url:
                        'https://res.cloudinary.com/teepublic/image/private/s--Vpp2fpMO--/t_Preview/b_rgb:ffffff,c_limit,f_jpg,h_630,q_90,w_630/v1520285396/development/designs/2321277_0.jpg',
                      type: 'preview'
                    }
                  ],
                  productType: 't-shirt',
                  productOptions: [
                    {
                      name: 'Gender',
                      value: 'Male'
                    },
                    {
                      name: 'Style',
                      value: 'Classic T-Shirt'
                    },
                    {
                      name: 'Size',
                      value: 'S'
                    },
                    {
                      value: 'White',
                      name: 'Color'
                    }
                  ],
                  price: '20.0',
                  description:
                    '100% combed ringspun cotton, the softest in the business. Pre-shrunk. 4.3 oz, the perfect weight for a graphic tee.',
                  id: 315
                }
              }
            },
            {
              type: 'hoodie',
              options: [
                {
                  name: 'Style'
                },
                {
                  name: 'Size'
                },
                {
                  name: 'Color'
                }
              ],
              _embedded: {
                defaultSku: {
                  images: [
                    {
                      type: 'mockup',
                      url:
                        'https://res.cloudinary.com/teepublic/image/private/s--dSZGJtmL--/t_Resized Artwork/c_crop,x_10,y_10/c_fit,w_465/c_crop,g_north_west,h_620,w_465,x_0,y_0/g_north_west,u_upload:v1446840654:production:blanks:xxlr5aujpichex3rg3uw,x_-391,y_-276/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1520285396/development/designs/2321277_0.jpg'
                    },
                    {
                      type: 'preview',
                      url:
                        'https://res.cloudinary.com/teepublic/image/private/s--NTu5nSkx--/t_Preview/b_rgb:262c3a,c_limit,f_jpg,h_630,q_90,w_630/v1520285396/development/designs/2321277_0.jpg'
                    }
                  ],
                  productOptions: [
                    {
                      value: 'Classic Hoodie',
                      name: 'Style'
                    },
                    {
                      name: 'Size',
                      value: 'S'
                    },
                    {
                      name: 'Color',
                      value: 'Navy'
                    }
                  ],
                  productType: 'hoodie',
                  description:
                    'Ringspun Fleece 80% cotton 20% Poly. Pre-shrunk. 9 oz. Super warm and cozy.',
                  id: 770,
                  price: '45.0'
                }
              }
            },
            {
              options: [
                {
                  name: 'Style'
                },
                {
                  name: 'Size'
                },
                {
                  name: 'Color'
                }
              ],
              _embedded: {
                defaultSku: {
                  id: 105,
                  description:
                    '100% combed ringspun premium cotton. Pre-shrunk. 5.2 oz, the perfect weight for kids, this shirt will hold up.',
                  price: '18.0',
                  images: [
                    {
                      url:
                        'https://res.cloudinary.com/teepublic/image/private/s--vMhiexdV--/t_Resized Artwork/c_crop,x_10,y_10/c_fit,w_416/c_crop,g_north_west,h_554,w_416,x_0,y_0/g_north_west,u_upload:v1446840612:production:blanks:cmnytzrskw2rtarpswec,x_-424,y_-325/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1520285396/development/designs/2321277_0.jpg',
                      type: 'mockup'
                    },
                    {
                      url:
                        'https://res.cloudinary.com/teepublic/image/private/s--Vpp2fpMO--/t_Preview/b_rgb:ffffff,c_limit,f_jpg,h_630,q_90,w_630/v1520285396/development/designs/2321277_0.jpg',
                      type: 'preview'
                    }
                  ],
                  productOptions: [
                    {
                      name: 'Style',
                      value: 'Toddler (Ages 1-3)'
                    },
                    {
                      name: 'Size',
                      value: '2T'
                    },
                    {
                      value: 'White',
                      name: 'Color'
                    }
                  ],
                  productType: 'kids-t-shirt'
                }
              },
              type: 'kids-t-shirt'
            },
            {
              _embedded: {
                defaultSku: {
                  price: '20.0',
                  id: 1199,
                  description:
                    '100% combed ringspun cotton. Pre-shrunk. 5.8 oz. Reinforced DTM 3-snap bottom closure makes it secure yet easy to take off.',
                  images: [
                    {
                      url:
                        'https://res.cloudinary.com/teepublic/image/private/s--IaGqdw1Y--/t_Resized Artwork/c_crop,x_10,y_10/c_fit,w_292/c_crop,g_north_west,h_389,w_292,x_0,y_0/g_north_west,u_upload:v1457730366:production:blanks:hr8stun1etxqajjc6vkl,x_-495,y_-307/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1520285396/development/designs/2321277_0.jpg',
                      type: 'mockup'
                    },
                    {
                      url:
                        'https://res.cloudinary.com/teepublic/image/private/s--Vpp2fpMO--/t_Preview/b_rgb:ffffff,c_limit,f_jpg,h_630,q_90,w_630/v1520285396/development/designs/2321277_0.jpg',
                      type: 'preview'
                    }
                  ],
                  productOptions: [
                    {
                      value: '6 Months',
                      name: 'Size'
                    },
                    {
                      value: 'White',
                      name: 'Color'
                    }
                  ],
                  productType: 'onesie'
                }
              },
              options: [
                {
                  name: 'Size'
                },
                {
                  name: 'Color'
                }
              ],
              type: 'onesie'
            },
            {
              type: 'kids-hoodie',
              _embedded: {
                defaultSku: {
                  productType: 'kids-hoodie',
                  images: [
                    {
                      url:
                        'https://res.cloudinary.com/teepublic/image/private/s--NCvr2uzH--/t_Resized Artwork/c_crop,x_10,y_10/c_fit,w_253/c_crop,g_north_west,h_335,w_253,x_0,y_0/g_north_west,u_upload:v1487088360:production:blanks:b5wvy0zgfmplmf5jgsu9,x_-519,y_-332/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1520285396/development/designs/2321277_0.jpg',
                      type: 'mockup'
                    },
                    {
                      type: 'preview',
                      url:
                        'https://res.cloudinary.com/teepublic/image/private/s--6GijY0uY--/b_rgb:fffffe,t_Heather Preview/c_limit,f_jpg,h_630,q_90,w_630/v1520285396/development/designs/2321277_0.jpg'
                    }
                  ],
                  productOptions: [
                    {
                      value: 'Youth Hoodie',
                      name: 'Style'
                    },
                    {
                      value: 'S',
                      name: 'Size'
                    },
                    {
                      value: 'Heather',
                      name: 'Color'
                    }
                  ],
                  price: '36.0',
                  id: 1866,
                  description:
                    'Ringspun fleece 80% cotton 20% poly. Pre-shrunk, 7.5 ounces, hooded with pocket. Super soft, warm, and cozy.'
                }
              },
              options: [
                {
                  name: 'Style'
                },
                {
                  name: 'Size'
                },
                {
                  name: 'Color'
                }
              ]
            },
            {
              _embedded: {
                defaultSku: {
                  id: 1886,
                  description:
                    '100% combed ringspun cotton, the softest in the business. Pre-shrunk. 4.5 oz, the perfect weight for a light comfy tee.',
                  price: '24.0',
                  productType: 'kids-long-sleeve-t-shirt',
                  images: [
                    {
                      url:
                        'https://res.cloudinary.com/teepublic/image/private/s--xhO2Ibnr--/t_Resized Artwork/c_crop,x_10,y_10/c_fit,w_401/c_crop,g_north_west,h_530,w_401,x_0,y_0/g_north_west,u_upload:v1487088365:production:blanks:ybsgjzhvwzjyza8phiwt,x_-445,y_-305/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1520285396/development/designs/2321277_0.jpg',
                      type: 'mockup'
                    },
                    {
                      url:
                        'https://res.cloudinary.com/teepublic/image/private/s--Vpp2fpMO--/t_Preview/b_rgb:ffffff,c_limit,f_jpg,h_630,q_90,w_630/v1520285396/development/designs/2321277_0.jpg',
                      type: 'preview'
                    }
                  ],
                  productOptions: [
                    {
                      name: 'Style',
                      value: 'Youth Long Sleeve T-Shirt'
                    },
                    {
                      value: 'S',
                      name: 'Size'
                    },
                    {
                      name: 'Color',
                      value: 'White'
                    }
                  ]
                }
              },
              options: [
                {
                  name: 'Style'
                },
                {
                  name: 'Size'
                },
                {
                  name: 'Color'
                }
              ],
              type: 'kids-long-sleeve-t-shirt'
            },
            {
              type: 'tank-top',
              options: [
                {
                  name: 'Gender'
                },
                {
                  name: 'Style'
                },
                {
                  name: 'Size'
                },
                {
                  name: 'Color'
                }
              ],
              _embedded: {
                defaultSku: {
                  description:
                    '100% combed ringspun cotton. Pre-shrunk. 4.2 oz. Unisex sizing and loose drape design for relaxed fit.',
                  id: 274,
                  price: '22.0',
                  productOptions: [
                    {
                      name: 'Gender',
                      value: 'Male'
                    },
                    {
                      name: 'Style',
                      value: 'Classic Tank'
                    },
                    {
                      value: 'S',
                      name: 'Size'
                    },
                    {
                      name: 'Color',
                      value: 'White'
                    }
                  ],
                  images: [
                    {
                      url:
                        'https://res.cloudinary.com/teepublic/image/private/s--kkXly0e5--/t_Resized Artwork/c_crop,x_10,y_10/c_fit,w_378/c_crop,g_north_west,h_504,w_378,x_0,y_0/g_north_west,u_upload:v1460136570:production:blanks:mbwst8xidnbwun9t4sui,x_-450,y_-392/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1520285396/development/designs/2321277_0.jpg',
                      type: 'mockup'
                    },
                    {
                      type: 'preview',
                      url:
                        'https://res.cloudinary.com/teepublic/image/private/s--Vpp2fpMO--/t_Preview/b_rgb:ffffff,c_limit,f_jpg,h_630,q_90,w_630/v1520285396/development/designs/2321277_0.jpg'
                    }
                  ],
                  productType: 'tank-top'
                }
              }
            },
            {
              _embedded: {
                defaultSku: {
                  productOptions: [
                    {
                      value: 'Male',
                      name: 'Gender'
                    },
                    {
                      value: 'Long Sleeve T-Shirt',
                      name: 'Style'
                    },
                    {
                      name: 'Size',
                      value: 'S'
                    },
                    {
                      value: 'White',
                      name: 'Color'
                    }
                  ],
                  images: [
                    {
                      url:
                        'https://res.cloudinary.com/teepublic/image/private/s--eMSyc_6S--/t_Resized Artwork/c_crop,x_10,y_10/c_fit,w_441/c_crop,g_north_west,h_588,w_441,x_0,y_0/g_north_west,u_upload:v1446840633:production:blanks:ibs7cls1uuxnuwgy7pev,x_-409,y_-299/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1520285396/development/designs/2321277_0.jpg',
                      type: 'mockup'
                    },
                    {
                      url:
                        'https://res.cloudinary.com/teepublic/image/private/s--Vpp2fpMO--/t_Preview/b_rgb:ffffff,c_limit,f_jpg,h_630,q_90,w_630/v1520285396/development/designs/2321277_0.jpg',
                      type: 'preview'
                    }
                  ],
                  productType: 'long-sleeve-t-shirt',
                  price: '22.0',
                  id: 613,
                  description:
                    '100% cotton jersey. Pre-shrunk. 5.2 oz is slightly heavier than our t-shirts but ideal for a long sleeve tee. Sized for men but can look great on women!'
                }
              },
              options: [
                {
                  name: 'Gender'
                },
                {
                  name: 'Style'
                },
                {
                  name: 'Size'
                },
                {
                  name: 'Color'
                }
              ],
              type: 'long-sleeve-t-shirt'
            },
            {
              type: 'baseball-tee',
              _embedded: {
                defaultSku: {
                  description:
                    '52% cotton/48% poly. Pre-shrunk. 3.6 oz a super light and soft raglan. Unisex sizing, women may want to size down for a slimmer fit.',
                  id: 935,
                  price: '26.0',
                  productOptions: [
                    {
                      value: 'S',
                      name: 'Size'
                    },
                    {
                      value: 'White/Black',
                      name: 'Color'
                    }
                  ],
                  images: [
                    {
                      url:
                        'https://res.cloudinary.com/teepublic/image/private/s--Uo5ZkS29--/t_Resized Artwork/c_crop,x_10,y_10/c_fit,w_376/c_crop,g_north_west,h_502,w_376,x_0,y_0/g_north_west,u_upload:v1446840677:production:blanks:fg7jur251hf7dhipha9f,x_-455,y_-298/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1520285396/development/designs/2321277_0.jpg',
                      type: 'mockup'
                    },
                    {
                      type: 'preview',
                      url:
                        'https://res.cloudinary.com/teepublic/image/private/s--6GijY0uY--/b_rgb:fffffe,t_Heather Preview/c_limit,f_jpg,h_630,q_90,w_630/v1520285396/development/designs/2321277_0.jpg'
                    }
                  ],
                  productType: 'baseball-tee'
                }
              },
              options: [
                {
                  name: 'Size'
                },
                {
                  name: 'Color'
                }
              ]
            },
            {
              _embedded: {
                defaultSku: {
                  price: '25.0',
                  description:
                    'High quality polycarbonate. Access all ports. Fade and Scratch resistant. Vacuum-form printed in U.S.A.',
                  id: 964,
                  productOptions: [
                    {
                      value: 'iPhone 6',
                      name: 'Device'
                    },
                    {
                      value: 'Slim',
                      name: 'Case Style'
                    }
                  ],
                  images: [
                    {
                      url:
                        'https://res.cloudinary.com/teepublic/image/private/s--k2WWuHdd--/c_crop,x_10,y_10/c_fit,w_776/c_crop,g_north_west,h_1100,w_554,x_111,y_-262/l_upload:v1452885561:production:blanks:gawvl5gka1pqwssxidw5/fl_layer_apply,g_north_west,x_-361,y_-339/b_rgb:ffffff/c_limit,f_jpg,h_630,q_90,w_630/v1520285396/development/designs/2321277_0.jpg',
                      type: 'mockup'
                    },
                    {
                      url:
                        'https://res.cloudinary.com/teepublic/image/private/s--Vpp2fpMO--/t_Preview/b_rgb:ffffff,c_limit,f_jpg,h_630,q_90,w_630/v1520285396/development/designs/2321277_0.jpg',
                      type: 'preview'
                    }
                  ],
                  productType: 'phone-case'
                }
              },
              options: [
                {
                  name: 'Device'
                },
                {
                  name: 'Case Style'
                }
              ],
              type: 'phone-case'
            },
            {
              _embedded: {
                defaultSku: {
                  price: '2.5',
                  id: 1918,
                  description:
                    'Individually die cut vinyl sticker. Semi gloss finish. 3 x 4 inch max size includes a thin white border around the sticker. Perfect for placing on your laptop, notebook or anywhere your imagination leads!',
                  productOptions: [
                    {
                      name: 'Size',
                      value: 'Small'
                    }
                  ],
                  images: [
                    {
                      url:
                        'https://res.cloudinary.com/teepublic/image/private/s--mYNf3LR0--/t_Resized Artwork/c_fit,g_north_west,h_954,w_954/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1520285396/development/designs/2321277_0.jpg',
                      type: 'mockup'
                    },
                    {
                      url:
                        'https://res.cloudinary.com/teepublic/image/private/s--x3F0wblE--/t_Resized Artwork/c_fit,g_north_west,h_954,w_954/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_lpad,g_center,h_327,w_327/g_north_west,l_upload:v1490882115:production:blanks:dwvfshnuawffombl173b,x_-470,y_-464/b_rgb:f2e7e8/c_limit,f_jpg,h_630,q_90,w_630/v1520285396/development/designs/2321277_0.jpg',
                      type: 'lifestyle'
                    }
                  ],
                  productType: 'sticker'
                }
              },
              options: [
                {
                  name: 'Size'
                }
              ],
              type: 'sticker'
            },
            {
              _embedded: {
                defaultSku: {
                  price: '36.0',
                  description:
                    'Form-fitting polyester. Foam padded interior. Easy access zipper. Comes in three sizes.',
                  id: 1740,
                  productType: 'laptop-case',
                  images: [],
                  productOptions: [
                    {
                      value: '12" Laptop',
                      name: 'Size'
                    }
                  ]
                }
              },
              options: [
                {
                  name: 'Size'
                }
              ],
              type: 'laptop-case'
            },
            {
              _embedded: {
                defaultSku: {
                  price: '20.0',
                  id: 1744,
                  description:
                    '128 pages (available rule lined or blank). 90gsm stock paper. Offers wraparound cover printing.',
                  images: [],
                  productType: 'notebook',
                  productOptions: [
                    {
                      name: 'Type',
                      value: 'Hardcover Notebook'
                    },
                    {
                      name: 'Style',
                      value: 'Ruled'
                    }
                  ]
                }
              },
              options: [
                {
                  name: 'Type'
                },
                {
                  name: 'Style'
                }
              ],
              type: 'notebook'
            },
            {
              type: 'mug',
              options: [
                {
                  name: 'Type'
                }
              ],
              _embedded: {
                defaultSku: {
                  description:
                    'Premium ceramic. Dishwasher and microwave safe. Embedded image. Vacuum-form printed in U.S.A.',
                  id: 1738,
                  price: '15.0',
                  productOptions: [
                    {
                      value: 'Coffee Mug',
                      name: 'Type'
                    }
                  ],
                  images: [
                    {
                      type: 'front',
                      url:
                        'https://res.cloudinary.com/teepublic/image/private/s--ghg6TEmk--/c_scale,h_704/c_lpad,g_north_west,h_801,w_1802,x_180,y_48/c_crop,h_801,w_691,x_125/c_mfit,g_north_west,u_misc:Mug Effect Coffee3 Left/e_displace,fl_layer_apply,x_14,y_-2/c_mfit,g_north_east,u_misc:Mug Effect Coffee3 Right/e_displace,fl_layer_apply,x_-14,y_-2/c_crop,h_801,w_656/g_north_west,l_upload:v1466696262:production:blanks:w00xdkhjelyrnp8i8wxr,x_-410,y_-235/b_rgb:ffffff/c_limit,f_jpg,h_630,q_90,w_630/v1520285396/development/designs/2321277_0.jpg'
                    },
                    {
                      type: 'back',
                      url:
                        'https://res.cloudinary.com/teepublic/image/private/s--N_UQcS_h--/c_scale,h_704/c_lpad,g_north_west,h_801,w_1802,x_180,y_48/c_crop,h_801,w_691,x_990/c_mfit,g_north_west,u_misc:Mug Effect Coffee3 Left/e_displace,fl_layer_apply,x_14,y_-2/c_mfit,g_north_east,u_misc:Mug Effect Coffee3 Right/e_displace,fl_layer_apply,x_-14,y_-2/c_crop,h_801,w_656/g_north_west,l_upload:v1466696263:production:blanks:ggzu757kuc1peyxu1qfl,x_-191,y_-235/b_rgb:ffffff/c_limit,f_jpg,h_630,q_90,w_630/v1520285396/development/designs/2321277_0.jpg'
                    },
                    {
                      type: 'preview',
                      url:
                        'https://res.cloudinary.com/teepublic/image/private/s--Vpp2fpMO--/t_Preview/b_rgb:ffffff,c_limit,f_jpg,h_630,q_90,w_630/v1520285396/development/designs/2321277_0.jpg'
                    }
                  ],
                  productType: 'mug'
                }
              }
            },
            {
              type: 'poster-and-art',
              _embedded: {
                defaultSku: {
                  productType: 'poster-and-art',
                  images: [
                    {
                      url:
                        'https://res.cloudinary.com/teepublic/image/private/s--6Of7qQz2--/c_crop,x_10,y_10/c_fit,w_1260/c_crop,g_north_west,h_945,w_1260,x_-1,y_0/co_rgb:ffffff,e_colorize,u_Misc:One Pixel Gray/c_scale,g_north_west,h_945,w_1260/fl_layer_apply,g_north_west,x_-1,y_0/bo_45px_solid_white/e_overlay,fl_layer_apply,h_945,l_Misc:Art Print Bumpmap,w_1260/e_shadow,x_6,y_6/c_limit,h_1134,w_1134/c_lpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1520285396/development/designs/2321277_0.jpg',
                      type: 'mockup'
                    },
                    {
                      type: 'lifestyle',
                      url:
                        'https://res.cloudinary.com/teepublic/image/private/s--tr7Nys9J--/c_crop,x_10,y_10/c_fit,w_1260/c_crop,g_north_west,h_945,w_1260,x_-1,y_0/co_rgb:ffffff,e_colorize,u_Misc:One Pixel Gray/c_scale,g_north_west,h_945,w_1260/fl_layer_apply,g_north_west,x_-1,y_0/bo_45px_solid_white/e_overlay,fl_layer_apply,h_945,l_Misc:Art Print Bumpmap,w_1260/e_shadow,x_6,y_6/co_rgb:999999,e_shadow,x_-2,y_-2/c_limit,h_564,w_564/g_north_west,u_Misc:Lifestyle,x_-80,y_-100/c_limit,f_jpg,h_630,q_90,w_630/v1520285396/development/designs/2321277_0.jpg'
                    }
                  ],
                  productOptions: [
                    {
                      name: 'Print Type',
                      value: 'Art Print'
                    },
                    {
                      value: 'Extra Large',
                      name: 'Print Size'
                    }
                  ],
                  id: 451,
                  description:
                    'Gallery quality, 100% cotton rag. Ultrachrome archival inks for rich, long-lasting color. Trimmed for framing with a 1 inch border.',
                  price: '50.0'
                }
              },
              options: [
                {
                  name: 'Print Type'
                },
                {
                  name: 'Print Size'
                }
              ]
            },
            {
              options: [
                {
                  name: 'Type'
                },
                {
                  name: 'Size'
                }
              ],
              _embedded: {
                defaultSku: {
                  productOptions: [
                    {
                      value: 'Throw Pillow',
                      name: 'Type'
                    },
                    {
                      name: 'Size',
                      value: 'Extra Small (14"x14")'
                    }
                  ],
                  images: [
                    {
                      url:
                        'https://res.cloudinary.com/teepublic/image/private/s---ZCfIp2q--/c_crop,x_10,y_10/c_fit,w_799/c_crop,g_north_west,h_1051,w_1051,x_-126,y_-226/l_upload:v1507037314:production:blanks:gbajnunp66ec7xftnpq1/fl_layer_apply,g_north_west,x_-231,y_-325/b_rgb:ffffff/c_limit,f_jpg,h_630,q_90,w_630/v1520285396/development/designs/2321277_0.jpg',
                      type: 'mockup'
                    },
                    {
                      type: 'preview',
                      url:
                        'https://res.cloudinary.com/teepublic/image/private/s--Vpp2fpMO--/t_Preview/b_rgb:ffffff,c_limit,f_jpg,h_630,q_90,w_630/v1520285396/development/designs/2321277_0.jpg'
                    }
                  ],
                  productType: 'throw-pillow',
                  price: '25.0',
                  description: '',
                  id: 1950
                }
              },
              type: 'throw-pillow'
            },
            {
              type: 'tote',
              _embedded: {
                defaultSku: {
                  images: [
                    {
                      url:
                        'https://res.cloudinary.com/teepublic/image/private/s--LSuwP92D--/c_crop,x_10,y_10/c_fit,w_846/c_crop,g_north_west,h_1007,w_1007,x_-81,y_-186/l_upload:v1507037313:production:blanks:n2pk899a8qrzxtz4tyvn/fl_layer_apply,g_north_west,x_-208,y_-317/b_rgb:ffffff/c_limit,f_jpg,h_630,q_90,w_630/v1520285396/development/designs/2321277_0.jpg',
                      type: 'mockup'
                    },
                    {
                      type: 'lifestyle',
                      url:
                        'https://res.cloudinary.com/teepublic/image/private/s--sAIWYhTD--/c_crop,x_10,y_10/c_fit,w_450/c_crop,g_north_west,h_536,w_536,x_-43,y_-99/l_upload:v1507575672:production:blanks:ykjo4q2yjyz9cpowr86k/fl_layer_apply,g_north_west,x_-374,y_-589/b_rgb:ffffff/c_limit,f_jpg,h_630,q_90,w_630/v1520285396/development/designs/2321277_0.jpg'
                    },
                    {
                      type: 'preview',
                      url:
                        'https://res.cloudinary.com/teepublic/image/private/s--Vpp2fpMO--/t_Preview/b_rgb:ffffff,c_limit,f_jpg,h_630,q_90,w_630/v1520285396/development/designs/2321277_0.jpg'
                    }
                  ],
                  productType: 'tote',
                  productOptions: [
                    {
                      name: 'Type',
                      value: 'Tote Bag'
                    },
                    {
                      value: 'Double Sided Print',
                      name: 'Style'
                    },
                    {
                      name: 'Size',
                      value: 'Small (13"x13")'
                    }
                  ],
                  price: '20.0',
                  description: null,
                  id: 1955
                }
              },
              options: [
                {
                  name: 'Type'
                },
                {
                  name: 'Style'
                },
                {
                  name: 'Size'
                }
              ]
            },
            {
              options: [
                {
                  name: 'Size'
                }
              ],
              _embedded: {
                defaultSku: {
                  id: 1966,
                  description: null,
                  price: '50.0',
                  images: [
                    {
                      type: 'mockup',
                      url:
                        'https://res.cloudinary.com/teepublic/image/private/s--J93mwglV--/c_crop,x_10,y_10/c_fit,w_992/c_crop,g_north_west,h_972,w_1127,x_-68,y_-108/l_misc:transparent_1260/fl_layer_apply,g_north_west,x_-134,y_-250/c_mfit,g_north_east,u_misc:tapestry-l-l-gradient/e_displace,fl_layer_apply,x_0,y_19/l_upload:v1507037316:production:blanks:knoqtwkqk9vucfsy8ke0/fl_layer_apply,g_north_west,x_0,y_0/b_rgb:ffffff/c_limit,f_jpg,h_630,q_90,w_630/v1520285396/development/designs/2321277_0.jpg'
                    },
                    {
                      type: 'preview',
                      url:
                        'https://res.cloudinary.com/teepublic/image/private/s--Vpp2fpMO--/t_Preview/b_rgb:ffffff,c_limit,f_jpg,h_630,q_90,w_630/v1520285396/development/designs/2321277_0.jpg'
                    }
                  ],
                  productType: 'tapestry',
                  productOptions: [
                    {
                      name: 'Size',
                      value: 'Large'
                    }
                  ]
                }
              },
              type: 'tapestry'
            }
          ],
          defaultProduct: {
            type: 't-shirt',
            _embedded: {
              defaultSku: {
                description:
                  '100% combed ringspun cotton, the softest in the business. Pre-shrunk. 4.3 oz, the perfect weight for a graphic tee.',
                id: 315,
                price: '20.0',
                images: [
                  {
                    type: 'mockup',
                    url:
                      'https://res.cloudinary.com/teepublic/image/private/s--oEOz4mlg--/t_Resized Artwork/c_crop,x_10,y_10/c_fit,w_470/c_crop,g_north_west,h_626,w_470,x_0,y_0/g_north_west,u_upload:v1462829024:production:blanks:a59x1cgomgu5lprfjlmi,x_-395,y_-325/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1520285396/development/designs/2321277_0.jpg'
                  },
                  {
                    type: 'preview',
                    url:
                      'https://res.cloudinary.com/teepublic/image/private/s--Vpp2fpMO--/t_Preview/b_rgb:ffffff,c_limit,f_jpg,h_630,q_90,w_630/v1520285396/development/designs/2321277_0.jpg'
                  }
                ],
                productOptions: [
                  {
                    value: 'Male',
                    name: 'Gender'
                  },
                  {
                    name: 'Style',
                    value: 'Classic T-Shirt'
                  },
                  {
                    value: 'S',
                    name: 'Size'
                  },
                  {
                    value: 'White',
                    name: 'Color'
                  }
                ],
                productType: 't-shirt'
              }
            },
            options: [
              {
                name: 'Gender'
              },
              {
                name: 'Style'
              },
              {
                name: 'Size'
              },
              {
                name: 'Color'
              }
            ]
          },
          owner: {
            username: 'marcelo',
            id: 500425
          }
        }
      },
      {
        description: 'Philadelphia Eagles - Underdogs',
        id: 2305560,
        slug: '2305560-philadelphia-eagles-underdog',
        _embedded: {
          owner: {
            id: 478619,
            username: 'MR2Imaging'
          },
          products: [
            {
              _links: {
                self: {
                  href: '/v1/designs/2305560/products/tapestry'
                }
              },
              _embedded: {
                defaultSku: {
                  id: 1966,
                  images: [
                    {
                      type: 'mockup',
                      url:
                        'https://res.cloudinary.com/teepublic/image/private/s--apTkFTN8--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,w_1127/c_crop,g_north_west,h_972,w_1127,x_0,y_-5/g_north_west,u_upload:v1507037316:production:blanks:knoqtwkqk9vucfsy8ke0,x_-66,y_-147/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1516816679/production/designs/2305560_2.jpg'
                    },
                    {
                      url:
                        'https://res.cloudinary.com/teepublic/image/private/s--lQNHDf_Z--/t_Preview/b_rgb:ffffff,c_limit,f_jpg,h_630,q_90,w_630/v1516816679/production/designs/2305560_2.jpg',
                      type: 'preview'
                    }
                  ],
                  description: null,
                  price: '50.0',
                  productOptions: [
                    {
                      value: 'Large',
                      name: 'Size'
                    }
                  ],
                  productType: 'tapestry'
                }
              },
              type: 'tapestry',
              options: [
                {
                  name: 'Size'
                },
                {
                  name: 'Style'
                }
              ]
            },
            {
              _embedded: {
                defaultSku: {
                  productOptions: [
                    {
                      name: 'Gender',
                      value: 'Male'
                    },
                    {
                      value: 'Classic T-Shirt',
                      name: 'Style'
                    },
                    {
                      name: 'Size',
                      value: 'S'
                    },
                    {
                      name: 'Color',
                      value: 'White'
                    }
                  ],
                  productType: 't-shirt',
                  price: '20.0',
                  images: [
                    {
                      type: 'mockup',
                      url:
                        'https://res.cloudinary.com/teepublic/image/private/s--ug0KDqPb--/t_Resized Artwork/c_crop,x_10,y_10/c_fit,w_470/c_crop,g_north_west,h_626,w_470,x_0,y_-3/g_north_west,u_upload:v1462829024:production:blanks:a59x1cgomgu5lprfjlmi,x_-395,y_-328/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1516816679/production/designs/2305560_2.jpg'
                    },
                    {
                      url:
                        'https://res.cloudinary.com/teepublic/image/private/s--lQNHDf_Z--/t_Preview/b_rgb:ffffff,c_limit,f_jpg,h_630,q_90,w_630/v1516816679/production/designs/2305560_2.jpg',
                      type: 'preview'
                    }
                  ],
                  description:
                    '100% combed ringspun cotton, the softest in the business. Pre-shrunk. 4.3 oz, the perfect weight for a graphic tee.',
                  id: 315
                }
              },
              type: 't-shirt',
              options: [
                {
                  name: 'Gender'
                },
                {
                  name: 'Style'
                },
                {
                  name: 'Size'
                },
                {
                  name: 'Color'
                }
              ],
              _links: {
                self: {
                  href: '/v1/designs/2305560/products/t-shirt'
                }
              }
            }
          ],
          defaultProduct: {
            _embedded: {
              defaultSku: {
                productOptions: [
                  {
                    name: 'Gender',
                    value: 'Male'
                  },
                  {
                    value: 'Classic T-Shirt',
                    name: 'Style'
                  },
                  {
                    name: 'Size',
                    value: 'S'
                  },
                  {
                    name: 'Color',
                    value: 'White'
                  }
                ],
                productType: 't-shirt',
                price: '20.0',
                images: [
                  {
                    type: 'mockup',
                    url:
                      'https://res.cloudinary.com/teepublic/image/private/s--ug0KDqPb--/t_Resized Artwork/c_crop,x_10,y_10/c_fit,w_470/c_crop,g_north_west,h_626,w_470,x_0,y_-3/g_north_west,u_upload:v1462829024:production:blanks:a59x1cgomgu5lprfjlmi,x_-395,y_-328/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1516816679/production/designs/2305560_2.jpg'
                  },
                  {
                    url:
                      'https://res.cloudinary.com/teepublic/image/private/s--lQNHDf_Z--/t_Preview/b_rgb:ffffff,c_limit,f_jpg,h_630,q_90,w_630/v1516816679/production/designs/2305560_2.jpg',
                    type: 'preview'
                  }
                ],
                description:
                  '100% combed ringspun cotton, the softest in the business. Pre-shrunk. 4.3 oz, the perfect weight for a graphic tee.',
                id: 315
              }
            },
            type: 't-shirt',
            options: [
              {
                name: 'Gender'
              },
              {
                name: 'Style'
              },
              {
                name: 'Size'
              },
              {
                name: 'Color'
              }
            ],
            _links: {
              self: {
                href: '/v1/designs/2305560/products/t-shirt'
              }
            }
          }
        },
        _links: {
          self: {
            href: '/v1/designs/2305560'
          },
          products: [
            {
              href: '/v1/designs/2305560/products/tapestry'
            }
          ]
        },
        imageUrl:
          'https://res.cloudinary.com/teepublic/image/private/s--hdoM9czM--/t_Preview/b_rgb:ffffff,c_limit,f_jpg,h_313,q_90,w_313/v1516816679/production/designs/2305560_2.jpg',
        title: 'Philadelphia Eagles - Underdog'
      }
    ]
  },
  slug: 'marcelo',
  type: 'User',
  avatarUrl:
    'https://res.cloudinary.com/teepublic/image/private/s--M-rshhg3--/ar_1:1,c_fill,h_300,w_300/d_misc:avatars:a_0.png,f_jpg,q_90/v1/development/stores/141840/avatar.jpg',
  bio: ''
};
export default store;
