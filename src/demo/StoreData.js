const store = {
  id: 125491,
  avatarUrl:
    'https://res.cloudinary.com/teepublic/image/private/s--6cHoFrY1--/ar_1:1,c_fill,h_300,w_300/d_misc:avatars:b_1.png,f_jpg,q_90/v1497975022/production/stores/125491/avatar.jpg',
  bannerUrl:
    'https://res.cloudinary.com/teepublic/image/private/s--7iu_m-yB--/ar_10:3,c_fill,h_300,w_1000/d_misc:cover-photo.jpg,f_jpg,q_90/v1497286099/production/stores/125491/banner.jpg',
  bio: 'This is a description.\r\n\r\nThis is a new line.',
  name: 'jecoopr',
  slug: 'jecoopr',
  type: 'User',
  _embedded: {
    productTypes: [
      {
        name: 't-shirt',
        displayName: 'T-Shirt',
        group: 'Adult Apparel'
      },
      {
        name: 'tank-top',
        displayName: 'Tank',
        group: 'Adult Apparel'
      },
      {
        name: 'hoodie',
        displayName: 'Hoodie',
        group: 'Adult Apparel'
      },
      {
        name: 'crewneck-sweatshirt',
        displayName: 'Crewneck',
        group: 'Adult Apparel'
      },
      {
        name: 'long-sleeve-t-shirt',
        displayName: 'Long Sleeve T-Shirt',
        group: 'Adult Apparel'
      },
      {
        name: 'baseball-tee',
        displayName: 'Baseball Tee',
        group: 'Adult Apparel'
      },
      {
        name: 'kids-t-shirt',
        displayName: 'Kids',
        group: 'Kids'
      },
      {
        name: 'onesie',
        displayName: 'Onesie',
        group: 'Kids'
      },
      {
        name: 'kids-hoodie',
        displayName: 'Kids Hoodie',
        group: 'Kids'
      },
      {
        name: 'kids-long-sleeve-t-shirt',
        displayName: 'Kids Long Sleeve T-Shirt',
        group: 'Kids'
      },
      {
        name: 'phone-case',
        displayName: 'Case',
        group: 'Home Goods'
      },
      {
        name: 'laptop-case',
        displayName: 'Laptop Case',
        group: 'Home Goods'
      },
      {
        name: 'sticker',
        displayName: 'Sticker',
        group: 'Home Goods'
      },
      {
        name: 'poster-and-art',
        displayName: 'Print',
        group: 'Cases & Stickers'
      },
      {
        name: 'notebook',
        displayName: 'Notebook',
        group: 'Cases & Stickers'
      },
      {
        name: 'mug',
        displayName: 'Mug',
        group: 'Cases & Stickers'
      },
      {
        name: 'throw-pillow',
        displayName: 'Pillow',
        group: 'Cases & Stickers'
      },
      {
        name: 'tote',
        displayName: 'Tote',
        group: 'Cases & Stickers'
      },
      {
        name: 'tapestry',
        displayName: 'Tapestry',
        group: 'Cases & Stickers'
      }
    ],
    albums: [
      {
        id: 7402,
        name: 'Album three',
        designIds: []
      },
      {
        id: 5555,
        name: 'Album 1',
        designIds: []
      },
      {
        id: 5554,
        name: 'Album 2',
        designIds: []
      }
    ],
    designs: [
      {
        id: 1983186,
        description: 'Tramampoline! Tramampoline!',
        title: 'Tramampoline',
        slug: '1983186-tramampoline',
        imageUrl:
          'https://res.cloudinary.com/teepublic/image/private/s--ennjJjmT--/t_Preview/b_rgb:ffb81c,c_limit,f_jpg,h_313,q_90,w_313/v1508385398/production/designs/1983186_1.jpg',
        _embedded: {
          owner: {
            id: 441300,
            username: 'jecoopr'
          },
          defaultProduct: {
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
                id: 1684,
                description:
                  '100% combed ringspun cotton, the softest in the business. Pre-shrunk. 4.3 oz, the perfect weight for a graphic tee.',
                price: '20.0',
                productType: 't-shirt',
                images: [
                  {
                    type: 'mockup',
                    url:
                      'https://res.cloudinary.com/teepublic/image/private/s--iS7fOKdT--/t_Resized Artwork/c_crop,x_10,y_10/c_fit,w_470/c_crop,g_north_west,h_626,w_470,x_0,y_0/g_north_west,u_upload:v1464728912:production:blanks:rew9odbb1ap0exlbbgo8,x_-395,y_-325/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1508385398/production/designs/1983186_1.jpg'
                  },
                  {
                    type: 'preview',
                    url:
                      'https://res.cloudinary.com/teepublic/image/private/s--s6hjjf-C--/t_Preview/b_rgb:ffb81c,c_limit,f_jpg,h_630,q_90,w_630/v1508385398/production/designs/1983186_1.jpg'
                  }
                ],
                productOptions: [
                  {
                    name: 'Gender',
                    id: 19,
                    displaySortOrder: 1,
                    value: 'Male'
                  },
                  {
                    name: 'Style',
                    id: 79,
                    displaySortOrder: 200,
                    value: 'Classic T-Shirt'
                  },
                  {
                    name: 'Size',
                    id: 21,
                    displaySortOrder: 10,
                    value: 'S'
                  },
                  {
                    name: 'Color',
                    id: 23,
                    displaySortOrder: 180,
                    value: 'Yellow'
                  }
                ]
              }
            },
            _links: {
              self: {
                href:
                  'https://api.teepublic.com/v1/designs/1983186/products/t-shirt'
              }
            }
          },
          products: [
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
                  id: 1684,
                  description:
                    '100% combed ringspun cotton, the softest in the business. Pre-shrunk. 4.3 oz, the perfect weight for a graphic tee.',
                  price: '20.0',
                  productType: 't-shirt',
                  images: [
                    {
                      type: 'mockup',
                      url:
                        'https://res.cloudinary.com/teepublic/image/private/s--iS7fOKdT--/t_Resized Artwork/c_crop,x_10,y_10/c_fit,w_470/c_crop,g_north_west,h_626,w_470,x_0,y_0/g_north_west,u_upload:v1464728912:production:blanks:rew9odbb1ap0exlbbgo8,x_-395,y_-325/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1508385398/production/designs/1983186_1.jpg'
                    },
                    {
                      type: 'preview',
                      url:
                        'https://res.cloudinary.com/teepublic/image/private/s--s6hjjf-C--/t_Preview/b_rgb:ffb81c,c_limit,f_jpg,h_630,q_90,w_630/v1508385398/production/designs/1983186_1.jpg'
                    }
                  ],
                  productOptions: [
                    {
                      name: 'Gender',
                      id: 19,
                      displaySortOrder: 1,
                      value: 'Male'
                    },
                    {
                      name: 'Style',
                      id: 79,
                      displaySortOrder: 200,
                      value: 'Classic T-Shirt'
                    },
                    {
                      name: 'Size',
                      id: 21,
                      displaySortOrder: 10,
                      value: 'S'
                    },
                    {
                      name: 'Color',
                      id: 23,
                      displaySortOrder: 180,
                      value: 'Yellow'
                    }
                  ]
                }
              },
              _links: {
                self: {
                  href:
                    'https://api.teepublic.com/v1/designs/1983186/products/t-shirt'
                }
              }
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
                  id: 250,
                  description:
                    '100% combed ringspun cotton. Pre-shrunk. 4.2 oz. Unisex sizing and loose drape design for relaxed fit.',
                  price: '22.0',
                  productType: 'tank-top',
                  images: [
                    {
                      type: 'mockup',
                      url:
                        'https://res.cloudinary.com/teepublic/image/private/s--FqmS6GGO--/t_Resized Artwork/c_crop,x_10,y_10/c_fit,w_378/c_crop,g_north_west,h_504,w_378,x_0,y_0/g_north_west,u_upload:v1460132760:production:blanks:dolfkumvabiffnk2yrbf,x_-450,y_-392/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1508385398/production/designs/1983186_1.jpg'
                    },
                    {
                      type: 'preview',
                      url:
                        'https://res.cloudinary.com/teepublic/image/private/s--L9YiKUzJ--/b_rgb:fffffe,t_Heather Preview/c_limit,f_jpg,h_630,q_90,w_630/v1508385398/production/designs/1983186_1.jpg'
                    }
                  ],
                  productOptions: [
                    {
                      name: 'Gender',
                      id: 19,
                      displaySortOrder: 1,
                      value: 'Male'
                    },
                    {
                      name: 'Style',
                      id: 18,
                      displaySortOrder: 100,
                      value: 'Classic Tank'
                    },
                    {
                      name: 'Size',
                      id: 21,
                      displaySortOrder: 10,
                      value: 'S'
                    },
                    {
                      name: 'Color',
                      id: 4,
                      displaySortOrder: 400,
                      value: 'Heather'
                    }
                  ]
                }
              },
              _links: {
                self: {
                  href:
                    'https://api.teepublic.com/v1/designs/1983186/products/tank-top'
                }
              }
            },
            {
              type: 'kids-t-shirt',
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
                  id: 108,
                  description:
                    '100% combed ringspun premium cotton. Pre-shrunk. 5.2 oz, the perfect weight for kids, this shirt will hold up.',
                  price: '18.0',
                  productType: 'kids-t-shirt',
                  images: [
                    {
                      type: 'mockup',
                      url:
                        'https://res.cloudinary.com/teepublic/image/private/s--UVb4H8md--/t_Resized Artwork/c_crop,x_10,y_10/c_fit,w_416/c_crop,g_north_west,h_554,w_416,x_0,y_0/g_north_west,u_upload:v1446840613:production:blanks:eziiileg5bgruzlxadzh,x_-424,y_-325/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1508385398/production/designs/1983186_1.jpg'
                    },
                    {
                      type: 'preview',
                      url:
                        'https://res.cloudinary.com/teepublic/image/private/s--s6hjjf-C--/t_Preview/b_rgb:ffb81c,c_limit,f_jpg,h_630,q_90,w_630/v1508385398/production/designs/1983186_1.jpg'
                    }
                  ],
                  productOptions: [
                    {
                      name: 'Style',
                      id: 15,
                      displaySortOrder: 5,
                      value: 'Toddler (Ages 1-3)'
                    },
                    {
                      name: 'Size',
                      id: 2,
                      displaySortOrder: 102,
                      value: '2T'
                    },
                    {
                      name: 'Color',
                      id: 23,
                      displaySortOrder: 180,
                      value: 'Yellow'
                    }
                  ]
                }
              },
              _links: {
                self: {
                  href:
                    'https://api.teepublic.com/v1/designs/1983186/products/kids-t-shirt'
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
                  id: 764,
                  description:
                    'Ringspun Fleece 80% cotton 20% Poly. Pre-shrunk. 9 oz. Super warm and cozy.',
                  price: '45.0',
                  productType: 'hoodie',
                  images: [
                    {
                      type: 'mockup',
                      url:
                        'https://res.cloudinary.com/teepublic/image/private/s--Lmazd8Mi--/t_Resized Artwork/c_crop,x_10,y_10/c_fit,w_465/c_crop,g_north_west,h_620,w_465,x_0,y_0/g_north_west,u_upload:v1446840653:production:blanks:f6q1psnlmvhpoighmph1,x_-391,y_-276/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1508385398/production/designs/1983186_1.jpg'
                    },
                    {
                      type: 'preview',
                      url:
                        'https://res.cloudinary.com/teepublic/image/private/s--Kx-G4xNk--/b_rgb:908d91,t_Heather Preview/c_limit,f_jpg,h_630,q_90,w_630/v1508385398/production/designs/1983186_1.jpg'
                    }
                  ],
                  productOptions: [
                    {
                      name: 'Style',
                      id: 86,
                      displaySortOrder: 400,
                      value: 'Classic Hoodie'
                    },
                    {
                      name: 'Size',
                      id: 21,
                      displaySortOrder: 10,
                      value: 'S'
                    },
                    {
                      name: 'Color',
                      id: 38,
                      displaySortOrder: 420,
                      value: 'Vintage Heather'
                    }
                  ]
                }
              },
              _links: {
                self: {
                  href:
                    'https://api.teepublic.com/v1/designs/1983186/products/hoodie'
                }
              }
            },
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
                  id: 50,
                  description:
                    'Ringspun Fleece 80% cotton 20% Poly. Pre-shrunk. 9 oz. Super warm and cozy with a twill neck to prevent stretching.',
                  price: '38.0',
                  productType: 'crewneck-sweatshirt',
                  images: [
                    {
                      type: 'mockup',
                      url:
                        'https://res.cloudinary.com/teepublic/image/private/s--a9Blo0FK--/t_Resized Artwork/c_crop,x_10,y_10/c_fit,w_409/c_crop,g_north_west,h_544,w_409,x_0,y_0/g_north_west,u_upload:v1446840597:production:blanks:g8setzjm0evp1b3aken2,x_-428,y_-347/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1508385398/production/designs/1983186_1.jpg'
                    },
                    {
                      type: 'preview',
                      url:
                        'https://res.cloudinary.com/teepublic/image/private/s--L9YiKUzJ--/b_rgb:fffffe,t_Heather Preview/c_limit,f_jpg,h_630,q_90,w_630/v1508385398/production/designs/1983186_1.jpg'
                    }
                  ],
                  productOptions: [
                    {
                      name: 'Gender',
                      id: 19,
                      displaySortOrder: 1,
                      value: 'Male'
                    },
                    {
                      name: 'Style',
                      id: 90,
                      displaySortOrder: 600,
                      value: 'Crewneck Sweatshirt'
                    },
                    {
                      name: 'Size',
                      id: 21,
                      displaySortOrder: 10,
                      value: 'S'
                    },
                    {
                      name: 'Color',
                      id: 4,
                      displaySortOrder: 400,
                      value: 'Heather'
                    }
                  ]
                }
              },
              _links: {
                self: {
                  href:
                    'https://api.teepublic.com/v1/designs/1983186/products/crewneck-sweatshirt'
                }
              }
            },
            {
              type: 'poster-and-art',
              options: [
                {
                  name: 'Print Type'
                },
                {
                  name: 'Print Size'
                }
              ],
              _embedded: {
                defaultSku: {
                  id: 451,
                  description:
                    'Gallery quality, 100% cotton rag. Ultrachrome archival inks for rich, long-lasting color. Trimmed for framing with a 1 inch border.',
                  price: '50.0',
                  productType: 'poster-and-art',
                  images: [
                    {
                      type: 'mockup',
                      url:
                        'https://res.cloudinary.com/teepublic/image/private/s--BzWrjB1V--/c_crop,x_10,y_10/c_fit,w_1109/c_crop,g_north_west,h_709,w_1260,x_-76,y_-276/co_rgb:ffffff,e_colorize,u_Misc:One Pixel Gray/c_scale,g_north_west,h_709,w_1260/fl_layer_apply,g_north_west,x_-76,y_-276/bo_45px_solid_white/e_overlay,fl_layer_apply,h_709,l_Misc:Art Print Bumpmap,w_1260/e_shadow,x_6,y_6/c_limit,h_1134,w_1134/c_lpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1508385398/production/designs/1983186_1.jpg'
                    },
                    {
                      type: 'lifestyle',
                      url:
                        'https://res.cloudinary.com/teepublic/image/private/s--c2A6jWcH--/c_crop,x_10,y_10/c_fit,w_1109/c_crop,g_north_west,h_709,w_1260,x_-76,y_-276/co_rgb:ffffff,e_colorize,u_Misc:One Pixel Gray/c_scale,g_north_west,h_709,w_1260/fl_layer_apply,g_north_west,x_-76,y_-276/bo_45px_solid_white/e_overlay,fl_layer_apply,h_709,l_Misc:Art Print Bumpmap,w_1260/e_shadow,x_6,y_6/co_rgb:999999,e_shadow,x_-2,y_-2/c_limit,h_564,w_564/g_north_west,u_Misc:Lifestyle,x_-80,y_-100/c_limit,f_jpg,h_630,q_90,w_630/v1508385398/production/designs/1983186_1.jpg'
                    }
                  ],
                  productOptions: [
                    {
                      name: 'Print Type',
                      id: 27,
                      displaySortOrder: 27,
                      value: 'Art Print'
                    },
                    {
                      name: 'Print Size',
                      id: 35,
                      displaySortOrder: 35,
                      value: 'Extra Large'
                    }
                  ]
                }
              },
              _links: {
                self: {
                  href:
                    'https://api.teepublic.com/v1/designs/1983186/products/poster-and-art'
                }
              }
            },
            {
              type: 'long-sleeve-t-shirt',
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
                  id: 603,
                  description:
                    '100% cotton jersey (Heather is 80% Cotton, 20% Poly). Pre-shrunk. 5.2 oz is slightly heavier than our t-shirts but ideal for a long sleeve tee. Sized for men but can look great on women!',
                  price: '22.0',
                  productType: 'long-sleeve-t-shirt',
                  images: [
                    {
                      type: 'mockup',
                      url:
                        'https://res.cloudinary.com/teepublic/image/private/s--1RT5Hyn6--/t_Resized Artwork/c_crop,x_10,y_10/c_fit,w_441/c_crop,g_north_west,h_588,w_441,x_0,y_0/g_north_west,u_upload:v1446840632:production:blanks:kpjs65t9wgcbcehm5w6a,x_-409,y_-299/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1508385398/production/designs/1983186_1.jpg'
                    },
                    {
                      type: 'preview',
                      url:
                        'https://res.cloudinary.com/teepublic/image/private/s--L9YiKUzJ--/b_rgb:fffffe,t_Heather Preview/c_limit,f_jpg,h_630,q_90,w_630/v1508385398/production/designs/1983186_1.jpg'
                    }
                  ],
                  productOptions: [
                    {
                      name: 'Gender',
                      id: 19,
                      displaySortOrder: 1,
                      value: 'Male'
                    },
                    {
                      name: 'Style',
                      id: 113,
                      displaySortOrder: 500,
                      value: 'Long Sleeve T-Shirt'
                    },
                    {
                      name: 'Size',
                      id: 21,
                      displaySortOrder: 10,
                      value: 'S'
                    },
                    {
                      name: 'Color',
                      id: 4,
                      displaySortOrder: 400,
                      value: 'Heather'
                    }
                  ]
                }
              },
              _links: {
                self: {
                  href:
                    'https://api.teepublic.com/v1/designs/1983186/products/long-sleeve-t-shirt'
                }
              }
            },
            {
              type: 'baseball-tee',
              options: [
                {
                  name: 'Size'
                },
                {
                  name: 'Color'
                }
              ],
              _embedded: {
                defaultSku: {
                  id: 950,
                  description:
                    '52% cotton/48% poly. Pre-shrunk. 3.6 oz a super light and soft raglan. Unisex sizing, women may want to size down for a slimmer fit.',
                  price: '26.0',
                  productType: 'baseball-tee',
                  images: [
                    {
                      type: 'mockup',
                      url:
                        'https://res.cloudinary.com/teepublic/image/private/s--Yx4Ogf2q--/t_Resized Artwork/c_crop,x_10,y_10/c_fit,w_376/c_crop,g_north_west,h_502,w_376,x_0,y_0/g_north_west,u_upload:v1446840679:production:blanks:yus2wcbj9c6llvkvfhay,x_-455,y_-298/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1508385398/production/designs/1983186_1.jpg'
                    },
                    {
                      type: 'preview',
                      url:
                        'https://res.cloudinary.com/teepublic/image/private/s--L0z69P40--/b_rgb:fffefe,t_Heather Preview/c_limit,f_jpg,h_630,q_90,w_630/v1508385398/production/designs/1983186_1.jpg'
                    }
                  ],
                  productOptions: [
                    {
                      name: 'Size',
                      id: 21,
                      displaySortOrder: 10,
                      value: 'S'
                    },
                    {
                      name: 'Color',
                      id: 52,
                      displaySortOrder: 620,
                      value: 'White/Royal'
                    }
                  ]
                }
              },
              _links: {
                self: {
                  href:
                    'https://api.teepublic.com/v1/designs/1983186/products/baseball-tee'
                }
              }
            },
            {
              type: 'phone-case',
              options: [
                {
                  name: 'Device'
                },
                {
                  name: 'Case Style'
                }
              ],
              _embedded: {
                defaultSku: {
                  id: 964,
                  description:
                    'High quality polycarbonate. Access all ports. Fade and Scratch resistant. Vacuum-form printed in U.S.A.',
                  price: '25.0',
                  productType: 'phone-case',
                  images: [
                    {
                      type: 'mockup',
                      url:
                        'https://res.cloudinary.com/teepublic/image/private/s--1JISrCmL--/c_crop,x_10,y_10/a_270/c_fit,h_671/c_crop,g_north_west,h_1100,w_554,x_-229,y_-215/l_upload:v1452885561:production:blanks:gawvl5gka1pqwssxidw5/fl_layer_apply,g_north_west,x_-590,y_-292/b_rgb:ffffff/c_limit,f_jpg,h_630,q_90,w_630/v1508385398/production/designs/1983186_1.jpg'
                    },
                    {
                      type: 'preview',
                      url:
                        'https://res.cloudinary.com/teepublic/image/private/s--kT8PekSQ--/t_Preview/b_rgb:ffffff,c_limit,f_jpg,h_630,q_90,w_630/v1508385398/production/designs/1983186_1.jpg'
                    }
                  ],
                  productOptions: [
                    {
                      name: 'Device',
                      id: 94,
                      displaySortOrder: 40,
                      value: 'iPhone 6'
                    },
                    {
                      name: 'Case Style',
                      id: 91,
                      displaySortOrder: 1,
                      value: 'Slim'
                    }
                  ]
                }
              },
              _links: {
                self: {
                  href:
                    'https://api.teepublic.com/v1/designs/1983186/products/phone-case'
                }
              }
            },
            {
              type: 'notebook',
              options: [
                {
                  name: 'Type'
                },
                {
                  name: 'Style'
                }
              ],
              _embedded: {
                defaultSku: {
                  id: 1744,
                  description:
                    '128 pages (available rule lined or blank). 90gsm stock paper. Offers wraparound cover printing.',
                  price: '20.0',
                  productType: 'notebook',
                  images: [
                    {
                      type: 'closed',
                      url:
                        'https://res.cloudinary.com/teepublic/image/private/s--UfWSHy5d--/c_crop,x_10,y_10/c_fit,w_432/c_crop,g_north_west,h_747,w_540,x_-70,y_-343/l_upload:v1466696261:production:blanks:gke15gs6x5nuos4rotrd/fl_layer_apply,g_north_west,x_-433,y_-600/b_rgb:ffffff/c_limit,f_jpg,h_630,q_90,w_630/v1508385398/production/designs/1983186_1.jpg'
                    },
                    {
                      type: 'mockup',
                      url:
                        'https://res.cloudinary.com/teepublic/image/private/s--ggJX4ENy--/c_crop,x_10,y_10/c_fit,w_422/c_crop,g_north_west,h_767,w_527,x_-69,y_-352/l_upload:v1466696259:production:blanks:rdfuyskrj0yai0yxxpq7/fl_layer_apply,g_north_west,x_-718,y_-605/b_rgb:ffffff/c_limit,f_jpg,h_630,q_90,w_630/v1508385398/production/designs/1983186_1.jpg'
                    },
                    {
                      type: 'inside',
                      url:
                        'https://assets.teepublic.com/assets/canvas/misc_blanks/notebook-bound-ruled-48a55b2fa35ac1d722a7c2464402dc5cb84809a207a5a4eb77df7fa4d5478895.png'
                    }
                  ],
                  productOptions: [
                    {
                      name: 'Type',
                      id: 125,
                      displaySortOrder: 0,
                      value: 'Hardcover Notebook'
                    },
                    {
                      name: 'Style',
                      id: 127,
                      displaySortOrder: 0,
                      value: 'Ruled'
                    }
                  ]
                }
              },
              _links: {
                self: {
                  href:
                    'https://api.teepublic.com/v1/designs/1983186/products/notebook'
                }
              }
            },
            {
              type: 'laptop-case',
              options: [
                {
                  name: 'Size'
                }
              ],
              _embedded: {
                defaultSku: {
                  id: 1740,
                  description:
                    'Form-fitting polyester. Foam padded interior. Easy access zipper. Comes in three sizes.',
                  price: '36.0',
                  productType: 'laptop-case',
                  images: [
                    {
                      type: 'front',
                      url:
                        'https://res.cloudinary.com/teepublic/image/private/s--p4u0Lsbu--/c_crop,x_10,y_10/c_fit,w_733/c_crop,g_north_west,h_734,w_1004,x_-136,y_-315/l_upload:v1466701074:production:blanks:ibu6swrzxdis4kiazjnn/fl_layer_apply,g_north_west,x_-267,y_-568/b_rgb:ffffff/c_limit,f_jpg,h_630,q_90,w_630/v1508385398/production/designs/1983186_1.jpg'
                    },
                    {
                      type: 'alternate',
                      url:
                        'https://res.cloudinary.com/teepublic/image/private/s--aVqFN5Bd--/c_crop,x_10,y_10/c_fit,w_733/c_crop,g_north_west,h_734,w_1004,x_-136,y_-315/l_upload:v1466701093:production:blanks:yqh5solqnjwu1s1ig7d7/fl_layer_apply,g_north_west,x_-267,y_-568/b_rgb:ffffff/c_limit,f_jpg,h_630,q_90,w_630/v1508385398/production/designs/1983186_1.jpg'
                    },
                    {
                      type: 'back',
                      url:
                        'https://assets.teepublic.com/assets/canvas/misc_blanks/laptop-case-back-2b9797efca59b56e1b194476266e2021a2440194ecc4b3a7ec0114d611f9f081.png'
                    }
                  ],
                  productOptions: [
                    {
                      name: 'Size',
                      id: 122,
                      displaySortOrder: 4012,
                      value: '12" Laptop'
                    }
                  ]
                }
              },
              _links: {
                self: {
                  href:
                    'https://api.teepublic.com/v1/designs/1983186/products/laptop-case'
                }
              }
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
                  id: 1738,
                  description:
                    'Premium ceramic. Dishwasher and microwave safe. Embedded image. Vacuum-form printed in U.S.A.',
                  price: '15.0',
                  productType: 'mug',
                  images: [
                    {
                      type: 'front',
                      url:
                        'https://res.cloudinary.com/teepublic/image/private/s--jqKROYyx--/c_scale,w_1297/c_lpad,g_north_west,h_801,w_1802,x_252,y_308/c_crop,h_801,w_691,x_125/c_mfit,g_north_west,u_misc:Mug Effect Coffee3 Left/e_displace,fl_layer_apply,x_14,y_-2/c_mfit,g_north_east,u_misc:Mug Effect Coffee3 Right/e_displace,fl_layer_apply,x_-14,y_-2/c_crop,h_801,w_656/g_north_west,l_upload:v1466696262:production:blanks:w00xdkhjelyrnp8i8wxr,x_-410,y_-235/b_rgb:ffffff/c_limit,f_jpg,h_630,q_90,w_630/v1508385398/production/designs/1983186_1.jpg'
                    },
                    {
                      type: 'back',
                      url:
                        'https://res.cloudinary.com/teepublic/image/private/s--ZXf0nWAw--/c_scale,w_1297/c_lpad,g_north_west,h_801,w_1802,x_252,y_308/c_crop,h_801,w_691,x_990/c_mfit,g_north_west,u_misc:Mug Effect Coffee3 Left/e_displace,fl_layer_apply,x_14,y_-2/c_mfit,g_north_east,u_misc:Mug Effect Coffee3 Right/e_displace,fl_layer_apply,x_-14,y_-2/c_crop,h_801,w_656/g_north_west,l_upload:v1466696263:production:blanks:ggzu757kuc1peyxu1qfl,x_-191,y_-235/b_rgb:ffffff/c_limit,f_jpg,h_630,q_90,w_630/v1508385398/production/designs/1983186_1.jpg'
                    },
                    {
                      type: 'preview',
                      url:
                        'https://res.cloudinary.com/teepublic/image/private/s--kT8PekSQ--/t_Preview/b_rgb:ffffff,c_limit,f_jpg,h_630,q_90,w_630/v1508385398/production/designs/1983186_1.jpg'
                    }
                  ],
                  productOptions: [
                    {
                      name: 'Type',
                      id: 129,
                      displaySortOrder: 0,
                      value: 'Coffee Mug'
                    }
                  ]
                }
              },
              _links: {
                self: {
                  href:
                    'https://api.teepublic.com/v1/designs/1983186/products/mug'
                }
              }
            },
            {
              type: 'onesie',
              options: [
                {
                  name: 'Size'
                },
                {
                  name: 'Color'
                }
              ],
              _embedded: {
                defaultSku: {
                  id: 1199,
                  description:
                    '100% combed ringspun cotton. Pre-shrunk. 5.8 oz. Reinforced DTM 3-snap bottom closure makes it secure yet easy to take off.',
                  price: '20.0',
                  productType: 'onesie',
                  images: [
                    {
                      type: 'mockup',
                      url:
                        'https://res.cloudinary.com/teepublic/image/private/s--gvufcFCC--/t_Resized Artwork/c_crop,x_10,y_10/c_fit,w_292/c_crop,g_north_west,h_389,w_292,x_0,y_0/g_north_west,u_upload:v1457730366:production:blanks:hr8stun1etxqajjc6vkl,x_-495,y_-307/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1508385398/production/designs/1983186_1.jpg'
                    },
                    {
                      type: 'preview',
                      url:
                        'https://res.cloudinary.com/teepublic/image/private/s--kT8PekSQ--/t_Preview/b_rgb:ffffff,c_limit,f_jpg,h_630,q_90,w_630/v1508385398/production/designs/1983186_1.jpg'
                    }
                  ],
                  productOptions: [
                    {
                      name: 'Size',
                      id: 114,
                      displaySortOrder: 205,
                      value: '6 Months'
                    },
                    {
                      name: 'Color',
                      id: 12,
                      displaySortOrder: 10,
                      value: 'White'
                    }
                  ]
                }
              },
              _links: {
                self: {
                  href:
                    'https://api.teepublic.com/v1/designs/1983186/products/onesie'
                }
              }
            },
            {
              type: 'kids-hoodie',
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
                  id: 1866,
                  description:
                    'Ringspun fleece 80% cotton 20% poly. Pre-shrunk, 7.5 ounces, hooded with pocket. Super soft, warm, and cozy.',
                  price: '36.0',
                  productType: 'kids-hoodie',
                  images: [
                    {
                      type: 'mockup',
                      url:
                        'https://res.cloudinary.com/teepublic/image/private/s--KnjdFoZ3--/t_Resized Artwork/c_crop,x_10,y_10/c_fit,w_253/c_crop,g_north_west,h_335,w_253,x_0,y_0/g_north_west,u_upload:v1487088360:production:blanks:b5wvy0zgfmplmf5jgsu9,x_-519,y_-332/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1508385398/production/designs/1983186_1.jpg'
                    },
                    {
                      type: 'preview',
                      url:
                        'https://res.cloudinary.com/teepublic/image/private/s--L9YiKUzJ--/b_rgb:fffffe,t_Heather Preview/c_limit,f_jpg,h_630,q_90,w_630/v1508385398/production/designs/1983186_1.jpg'
                    }
                  ],
                  productOptions: [
                    {
                      name: 'Style',
                      id: 166,
                      displaySortOrder: 10000,
                      value: 'Youth Hoodie'
                    },
                    {
                      name: 'Size',
                      id: 21,
                      displaySortOrder: 10,
                      value: 'S'
                    },
                    {
                      name: 'Color',
                      id: 4,
                      displaySortOrder: 400,
                      value: 'Heather'
                    }
                  ]
                }
              },
              _links: {
                self: {
                  href:
                    'https://api.teepublic.com/v1/designs/1983186/products/kids-hoodie'
                }
              }
            },
            {
              type: 'kids-long-sleeve-t-shirt',
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
                  id: 1894,
                  description:
                    '100% combed ringspun cotton, the softest in the business. Pre-shrunk. 4.5 oz, the perfect weight for a light comfy tee.',
                  price: '24.0',
                  productType: 'kids-long-sleeve-t-shirt',
                  images: [
                    {
                      type: 'mockup',
                      url:
                        'https://res.cloudinary.com/teepublic/image/private/s--KutloH0b--/t_Resized Artwork/c_crop,x_10,y_10/c_fit,w_401/c_crop,g_north_west,h_530,w_401,x_0,y_0/g_north_west,u_upload:v1487088367:production:blanks:aautjr2snwhgvuaetnhb,x_-445,y_-305/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1508385398/production/designs/1983186_1.jpg'
                    },
                    {
                      type: 'preview',
                      url:
                        'https://res.cloudinary.com/teepublic/image/private/s--L9YiKUzJ--/b_rgb:fffffe,t_Heather Preview/c_limit,f_jpg,h_630,q_90,w_630/v1508385398/production/designs/1983186_1.jpg'
                    }
                  ],
                  productOptions: [
                    {
                      name: 'Style',
                      id: 167,
                      displaySortOrder: 10100,
                      value: 'Youth Long Sleeve T-Shirt'
                    },
                    {
                      name: 'Size',
                      id: 21,
                      displaySortOrder: 10,
                      value: 'S'
                    },
                    {
                      name: 'Color',
                      id: 4,
                      displaySortOrder: 400,
                      value: 'Heather'
                    }
                  ]
                }
              },
              _links: {
                self: {
                  href:
                    'https://api.teepublic.com/v1/designs/1983186/products/kids-long-sleeve-t-shirt'
                }
              }
            },
            {
              type: 'sticker',
              options: [
                {
                  name: 'Size'
                }
              ],
              _embedded: {
                defaultSku: {
                  id: 1918,
                  description:
                    'Individually die cut vinyl sticker. Semi gloss finish. 3 x 4 inch max size includes a thin white border around the sticker. Perfect for placing on your laptop, notebook or anywhere your imagination leads!',
                  price: '2.5',
                  productType: 'sticker',
                  images: [
                    {
                      type: 'mockup',
                      url:
                        'https://res.cloudinary.com/teepublic/image/private/s--uMaXG_lh--/t_Resized Artwork/c_fit,g_north_west,h_954,w_954/co_ffffff,e_outline:35/co_ffffff,e_outline:inner_fill:35/co_ffffff,e_outline:35/co_ffffff,e_outline:inner_fill:35/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1508385398/production/designs/1983186_1.jpg'
                    },
                    {
                      type: 'lifestyle',
                      url:
                        'https://res.cloudinary.com/teepublic/image/private/s--FmvFUtQP--/t_Resized Artwork/c_fit,g_north_west,h_954,w_954/co_ffffff,e_outline:35/co_ffffff,e_outline:inner_fill:35/co_ffffff,e_outline:35/co_ffffff,e_outline:inner_fill:35/co_bbbbbb,e_outline:3:1000/c_lpad,g_center,h_327,w_327/g_north_west,l_upload:v1490882115:production:blanks:dwvfshnuawffombl173b,x_-470,y_-464/b_rgb:f2e7e8/c_limit,f_jpg,h_630,q_90,w_630/v1508385398/production/designs/1983186_1.jpg'
                    }
                  ],
                  productOptions: [
                    {
                      name: 'Size',
                      id: 168,
                      displaySortOrder: 1010,
                      value: 'Small'
                    }
                  ]
                }
              },
              _links: {
                self: {
                  href:
                    'https://api.teepublic.com/v1/designs/1983186/products/sticker'
                }
              }
            },
            {
              type: 'throw-pillow',
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
                  id: 1950,
                  description: '',
                  price: '25.0',
                  productType: 'throw-pillow',
                  images: [
                    {
                      type: 'mockup',
                      url:
                        'https://res.cloudinary.com/teepublic/image/private/s--JgTVCS17--/c_crop,x_10,y_10/c_fit,w_799/c_crop,g_north_west,h_1051,w_1051,x_-126,y_-469/l_upload:v1507037314:production:blanks:gbajnunp66ec7xftnpq1/fl_layer_apply,g_north_west,x_-231,y_-568/b_rgb:ffffff/c_limit,f_jpg,h_630,q_90,w_630/v1508385398/production/designs/1983186_1.jpg'
                    },
                    {
                      type: 'preview',
                      url:
                        'https://res.cloudinary.com/teepublic/image/private/s--kT8PekSQ--/t_Preview/b_rgb:ffffff,c_limit,f_jpg,h_630,q_90,w_630/v1508385398/production/designs/1983186_1.jpg'
                    }
                  ],
                  productOptions: [
                    {
                      name: 'Type',
                      id: 179,
                      displaySortOrder: 800,
                      value: 'Throw Pillow'
                    },
                    {
                      name: 'Size',
                      id: 189,
                      displaySortOrder: 2014,
                      value: 'Extra Small (14"x14")'
                    }
                  ]
                }
              },
              _links: {
                self: {
                  href:
                    'https://api.teepublic.com/v1/designs/1983186/products/throw-pillow'
                }
              }
            },
            {
              type: 'tote',
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
              ],
              _embedded: {
                defaultSku: {
                  id: 1955,
                  description: null,
                  price: '20.0',
                  productType: 'tote',
                  images: [
                    {
                      type: 'mockup',
                      url:
                        'https://res.cloudinary.com/teepublic/image/private/s--kXzUw1Dx--/c_crop,x_10,y_10/c_fit,w_846/c_crop,g_north_west,h_1007,w_1007,x_-81,y_-444/l_upload:v1507037313:production:blanks:n2pk899a8qrzxtz4tyvn/fl_layer_apply,g_north_west,x_-208,y_-575/b_rgb:ffffff/c_limit,f_jpg,h_630,q_90,w_630/v1508385398/production/designs/1983186_1.jpg'
                    },
                    {
                      type: 'lifestyle',
                      url:
                        'https://res.cloudinary.com/teepublic/image/private/s--uMgucg76--/c_crop,x_10,y_10/c_fit,w_450/c_crop,g_north_west,h_536,w_536,x_-43,y_-236/l_upload:v1507575672:production:blanks:ykjo4q2yjyz9cpowr86k/fl_layer_apply,g_north_west,x_-374,y_-726/b_rgb:ffffff/c_limit,f_jpg,h_630,q_90,w_630/v1508385398/production/designs/1983186_1.jpg'
                    },
                    {
                      type: 'preview',
                      url:
                        'https://res.cloudinary.com/teepublic/image/private/s--kT8PekSQ--/t_Preview/b_rgb:ffffff,c_limit,f_jpg,h_630,q_90,w_630/v1508385398/production/designs/1983186_1.jpg'
                    }
                  ],
                  productOptions: [
                    {
                      name: 'Type',
                      id: 180,
                      displaySortOrder: 800,
                      value: 'Tote Bag'
                    },
                    {
                      name: 'Style',
                      id: 181,
                      displaySortOrder: 800,
                      value: 'Double Sided Print'
                    },
                    {
                      name: 'Size',
                      id: 194,
                      displaySortOrder: 3016,
                      value: 'Small (13"x13")'
                    }
                  ]
                }
              },
              _links: {
                self: {
                  href:
                    'https://api.teepublic.com/v1/designs/1983186/products/tote'
                }
              }
            },
            {
              type: 'tapestry',
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
                  productType: 'tapestry',
                  images: [
                    {
                      type: 'mockup',
                      url:
                        'https://res.cloudinary.com/teepublic/image/private/s--asPjM-NM--/c_crop,x_10,y_10/c_fit,w_992/c_crop,g_north_west,h_972,w_1127,x_-68,y_-415/l_misc:transparent_1260/fl_layer_apply,g_north_west,x_-134,y_-557/c_mfit,g_north_east,u_misc:tapestry-l-l-gradient/e_displace,fl_layer_apply,x_0,y_19/l_upload:v1507037316:production:blanks:knoqtwkqk9vucfsy8ke0/fl_layer_apply,g_north_west,x_0,y_0/b_rgb:ffffff/c_limit,f_jpg,h_630,q_90,w_630/v1508385398/production/designs/1983186_1.jpg'
                    },
                    {
                      type: 'preview',
                      url:
                        'https://res.cloudinary.com/teepublic/image/private/s--kT8PekSQ--/t_Preview/b_rgb:ffffff,c_limit,f_jpg,h_630,q_90,w_630/v1508385398/production/designs/1983186_1.jpg'
                    }
                  ],
                  productOptions: [
                    {
                      name: 'Size',
                      id: 199,
                      displaySortOrder: 3568,
                      value: 'Large'
                    }
                  ]
                }
              },
              _links: {
                self: {
                  href:
                    'https://api.teepublic.com/v1/designs/1983186/products/tapestry'
                }
              }
            }
          ]
        },
        _links: {
          self: {
            href: 'https://api.teepublic.com/v1/designs/1983186'
          },
          products: [
            {
              href:
                'https://api.teepublic.com/v1/designs/1983186/products/t-shirt'
            },
            {
              href:
                'https://api.teepublic.com/v1/designs/1983186/products/tank-top'
            },
            {
              href:
                'https://api.teepublic.com/v1/designs/1983186/products/kids-t-shirt'
            },
            {
              href:
                'https://api.teepublic.com/v1/designs/1983186/products/hoodie'
            },
            {
              href:
                'https://api.teepublic.com/v1/designs/1983186/products/crewneck-sweatshirt'
            },
            {
              href:
                'https://api.teepublic.com/v1/designs/1983186/products/poster-and-art'
            },
            {
              href:
                'https://api.teepublic.com/v1/designs/1983186/products/long-sleeve-t-shirt'
            },
            {
              href:
                'https://api.teepublic.com/v1/designs/1983186/products/baseball-tee'
            },
            {
              href:
                'https://api.teepublic.com/v1/designs/1983186/products/phone-case'
            },
            {
              href:
                'https://api.teepublic.com/v1/designs/1983186/products/notebook'
            },
            {
              href:
                'https://api.teepublic.com/v1/designs/1983186/products/laptop-case'
            },
            {
              href: 'https://api.teepublic.com/v1/designs/1983186/products/mug'
            },
            {
              href:
                'https://api.teepublic.com/v1/designs/1983186/products/onesie'
            },
            {
              href:
                'https://api.teepublic.com/v1/designs/1983186/products/kids-hoodie'
            },
            {
              href:
                'https://api.teepublic.com/v1/designs/1983186/products/kids-long-sleeve-t-shirt'
            },
            {
              href:
                'https://api.teepublic.com/v1/designs/1983186/products/sticker'
            },
            {
              href:
                'https://api.teepublic.com/v1/designs/1983186/products/throw-pillow'
            },
            {
              href: 'https://api.teepublic.com/v1/designs/1983186/products/tote'
            },
            {
              href:
                'https://api.teepublic.com/v1/designs/1983186/products/tapestry'
            }
          ]
        }
      }
    ]
  },
  _links: {
    self: {
      href: 'https://api.teepublic.com/v1/stores/125491'
    },
    designs: [
      {
        href: 'https://api.teepublic.com/v1/designs/1983186'
      }
    ]
  }
};

export default store;
